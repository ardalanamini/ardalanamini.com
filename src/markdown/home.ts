import type { Heading, Link, List, Paragraph, RootContent, Text } from "mdast";
import { toMarkdown } from "mdast-util-to-markdown";
import {
  CONTACT,
  EXPERIENCES,
  EXPERIENCE_SUMMARY,
  PROFILE,
  PROJECTS,
  SECTIONS,
  SOCIAL_LINKS,
  TECH_STACK,
} from "../content/home.ts";

const text = (value: string): Text => ({
  type: "text",
  value,
});
const heading = (depth: Heading["depth"], value: string): Heading => ({
  type    : "heading",
  depth,
  children: [text(value)],
});
const paragraph = (value: string): Paragraph => ({
  type    : "paragraph",
  children: [text(value)],
});
const list = (values: readonly string[]): List => ({
  type    : "list",
  ordered : false,
  children: values.map(value => ({
    type    : "listItem",
    children: [paragraph(value)],
  })),
});
const link = (label: string, url: string): Link => ({
  type    : "link",
  url,
  children: [text(label)],
});

export function renderHomeMarkdown(): string {
  return toMarkdown({
    type    : "root",
    children: [
      heading(1, PROFILE.name),
      paragraph(PROFILE.availability),
      heading(2, PROFILE.headline.join(" ")),
      paragraph(PROFILE.introduction),
      paragraph(PROFILE.biography),
      list(PROFILE.skills),
      paragraph(EXPERIENCE_SUMMARY),
      heading(2, SECTIONS.projects.title),
      paragraph(SECTIONS.projects.description),
      ...PROJECTS.flatMap((project): RootContent[] => [
        {
          type    : "heading",
          depth   : 3,
          children: [link(project.title, project.link)],
        },
        paragraph(project.description),
        paragraph(project.metrics.join(" · ")),
        paragraph(project.tech.join(", ")),
      ]),
      heading(2, SECTIONS.experience.title),
      ...EXPERIENCES.flatMap((experience): RootContent[] => [
        heading(3, experience.company),
        paragraph(experience.role),
        paragraph(experience.period),
        paragraph(experience.description),
        list(experience.achievements),
      ]),
      heading(2, SECTIONS.techStack.title),
      paragraph(SECTIONS.techStack.description),
      ...TECH_STACK.flatMap((stack): RootContent[] => [heading(3, stack.name), list(stack.items)]),
      heading(2, CONTACT.title.join(" ")),
      paragraph(CONTACT.description),
      {
        type    : "paragraph",
        children: [link(CONTACT.emailLabel, `mailto:${ CONTACT.email }`)],
      },
      {
        type    : "list",
        ordered : false,
        children: Object.values(SOCIAL_LINKS).map(social => ({
          type    : "listItem",
          children: [
            {
              type    : "paragraph",
              children: [link(social.label, social.url)],
            },
          ],
        })),
      },
    ],
  }, { bullet: "-" });
}
