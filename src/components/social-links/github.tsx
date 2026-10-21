import { type SVGProps, component$ } from "@builder.io/qwik";
import { LuGithub } from "@qwikest/icons/lucide";

export const GithubLink = component$(({
  wrapperClass,
  ...properties
}: SVGProps<SVGSVGElement> & { wrapperClass?: string; }) => (
  <a
    href="https://github.com/ardalanamini"
    rel="noopener noreferrer"
    target="_blank"
    class={["hover:text-accent transition-colors", wrapperClass]}
    aria-label="GitHub"
  >
    <LuGithub {...properties} />
  </a>
));
