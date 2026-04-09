import { component$, SVGProps } from "@builder.io/qwik";
import { LuLinkedin } from "@qwikest/icons/lucide";
import { clsx } from "clsx";

export const LinkedInLink = component$(
  ({
    wrapperClass,
    ...props
  }: SVGProps<SVGSVGElement> & { wrapperClass?: string }) => {
    return (
      <a
        href="https://www.linkedin.com/in/ardalanamini/"
        rel="noopener noreferrer"
        target="_blank"
        class={clsx("hover:text-accent transition-colors", wrapperClass)}
        aria-label="LinkedIn"
      >
        <LuLinkedin {...props} />
      </a>
    );
  },
);
