import { type SVGProps, component$ } from "@builder.io/qwik";
import { GithubIcon } from "~/icons/github";

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
    <GithubIcon {...properties} />
  </a>
));
