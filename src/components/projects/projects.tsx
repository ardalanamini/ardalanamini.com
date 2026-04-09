import { component$ } from "@builder.io/qwik";
import {
  LuArrowLeft,
  LuArrowRight,
  LuChevronRight,
  LuExternalLink,
} from "@qwikest/icons/lucide";
import { Motion } from "~/integrations/react/motion";

export const Projects = component$(() => {
  return (
    <section
      id="projects"
      class="border-line bg-surface/50 overflow-hidden border-t px-6 py-20"
    >
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 class="mb-2 text-3xl font-bold">Projects</h2>
            <p class="text-sm tracking-widest text-gray-500 uppercase">
              Open Source Repositories & Contributions
            </p>
          </div>
          <div class="flex items-center gap-4">
            <div class="mr-4 text-right">
              <span class="text-accent text-xs font-bold uppercase">
                {PROJECTS.length.toString().padStart(2, "0")} Projects
              </span>
            </div>
            <div class="flex gap-2">
              <button
                onClick$={() =>
                  document
                    .getElementById("project-carousel")
                    ?.scrollBy({ left: -400, behavior: "smooth" })
                }
                class="border-line hover:border-accent hover:text-accent bg-bg-dark/50 rounded-lg border p-2 transition-colors"
              >
                <LuArrowLeft class="h-4 w-4" />
              </button>
              <button
                onClick$={() =>
                  document
                    .getElementById("project-carousel")
                    ?.scrollBy({ left: 400, behavior: "smooth" })
                }
                class="border-line hover:border-accent hover:text-accent bg-bg-dark/50 rounded-lg border p-2 transition-colors"
              >
                <LuArrowRight class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          id="project-carousel"
          class="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((project, index) => (
            <Motion
              client:visible
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              class="terminal-window group hover:border-accent/50 min-w-[320px] snap-start transition-colors md:min-w-100"
            >
              <div class="bg-line/30 border-line flex items-center justify-between border-b px-4 py-2">
                <span class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  {project.title.toLowerCase().replaceAll(" ", "_")}.git
                </span>
                <div class="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              </div>
              <div class="p-6">
                <p class="mb-6 text-sm text-gray-400">{project.description}</p>
                <div class="mb-6 space-y-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      class="text-accent flex items-center gap-2 text-[10px] font-bold tracking-tighter uppercase"
                    >
                      <LuChevronRight class="h-3 w-3" /> {metric}
                    </div>
                  ))}
                </div>
                <div class="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      class="bg-line/50 border-line rounded border px-2 py-1 text-[9px] text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  class="hover:text-accent inline-flex items-center gap-2 text-xs font-bold text-white transition-colors"
                >
                  View Source <LuExternalLink class="h-3 w-3" />
                </a>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
});

export const PROJECTS = [
  {
    title: "Foxify",
    description:
      "A fast, easy to use & typescript ready web framework for Node.js",
    metrics: ["152 Stars", "MIT License", "v0.10.7"],
    tech: ["TypeScript", "Pnpm"],
    link: "https://github.com/foxifyjs/foxify",
  },
  {
    title: "Prototyped.js",
    description:
      "Common Typescript ready helpers & prototypes available for both Server-Side and Client-Side applications.",
    metrics: ["25 Stars", "MIT License", "v3.0.5"],
    tech: ["TypeScript"],
    link: "https://github.com/ardalanamini/prototyped.js",
  },
  {
    title: "Kutt.it Node.js Client",
    description:
      "Node.js & browser (TypeScript) client for Kutt url shortener.",
    metrics: ["40 Stars", "MIT License", "v3.0.2"],
    tech: ["TypeScript"],
    link: "https://github.com/ardalanamini/node-kutt",
  },
  {
    title: "Github Automatic Changelog",
    description:
      "A GitHub action that automatically generates changelogs from commit messages.",
    metrics: ["28 Stars", "MIT License", "v4.0.6"],
    tech: ["Node.js", "TypeScript", "GitHub Actions"],
    link: "https://github.com/ardalanamini/auto-changelog",
  },
];
