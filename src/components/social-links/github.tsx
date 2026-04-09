import { component$, SVGProps } from "@builder.io/qwik";
import { LuGithub } from "@qwikest/icons/lucide";
import { clsx } from "clsx";

export const GithubLink = component$(
  ({
    wrapperClass,
    ...props
  }: SVGProps<SVGSVGElement> & { wrapperClass?: string }) => {
    return (
      <a
        href="https://github.com/ardalanamini"
        rel="noopener noreferrer"
        target="_blank"
        class={clsx("hover:text-accent transition-colors", wrapperClass)}
      >
        <LuGithub {...props} />
      </a>
    );
  },
);
