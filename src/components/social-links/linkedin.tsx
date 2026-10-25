import { type SVGProps, component$ } from "@builder.io/qwik";
import { SOCIAL_LINKS } from "~/content/home";
import { LinkedInIcon } from "~/icons/linkedin";

export const LinkedInLink = component$(({
  wrapperClass,
  ...properties
}: SVGProps<SVGSVGElement> & { wrapperClass?: string; }) => (
  <a
    href={SOCIAL_LINKS.linkedin.url}
    rel="noopener noreferrer"
    target="_blank"
    class={["hover:text-accent transition-colors", wrapperClass]}
    aria-label={SOCIAL_LINKS.linkedin.label}
  >
    <LinkedInIcon {...properties} />
  </a>
));
