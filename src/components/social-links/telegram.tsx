import { type SVGProps, component$ } from "@builder.io/qwik";
import { SOCIAL_LINKS } from "~/content/home";
import { TelegramIcon } from "~/icons/telegram";

export const TelegramLink = component$(({
  wrapperClass,
  ...properties
}: SVGProps<SVGSVGElement> & { wrapperClass?: string; }) => (
  <a
    href={SOCIAL_LINKS.telegram.url}
    rel="noopener noreferrer"
    target="_blank"
    class={["hover:text-accent transition-colors", wrapperClass]}
    aria-label={SOCIAL_LINKS.telegram.label}
  >
    <TelegramIcon {...properties} />
  </a>
));
