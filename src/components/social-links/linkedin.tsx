import { type SVGProps, component$ } from "@builder.io/qwik";
import { LuLinkedin } from "@qwikest/icons/lucide";

export const LinkedInLink = component$(({
  wrapperClass,
  ...properties
}: SVGProps<SVGSVGElement> & { wrapperClass?: string; }) => (
  <a
    href="https://www.linkedin.com/in/ardalanamini/"
    rel="noopener noreferrer"
    target="_blank"
    class={["hover:text-accent transition-colors", wrapperClass]}
    aria-label="LinkedIn"
  >
    <LuLinkedin {...properties} />
  </a>
));
