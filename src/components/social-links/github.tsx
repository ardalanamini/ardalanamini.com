import { type SVGProps, component$ } from "@builder.io/qwik";
import { SOCIAL_LINKS } from "~/content/home";
import { GithubIcon } from "~/icons/github";

export const GithubLink = component$(({
  wrapperClass,
  ...properties
}: SVGProps<SVGSVGElement> & { wrapperClass?: string; }) => (
  <a
    href={SOCIAL_LINKS.github.url}
    rel="noopener noreferrer"
    target="_blank"
    class={["hover:text-accent transition-colors", wrapperClass]}
    aria-label={SOCIAL_LINKS.github.label}
  >
    <GithubIcon {...properties} />
  </a>
));
