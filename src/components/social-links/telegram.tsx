import { type SVGProps, component$ } from "@builder.io/qwik";
import { TelegramIcon } from "~/icons/telegram";

export const TelegramLink = component$(({
  wrapperClass,
  ...properties
}: SVGProps<SVGSVGElement> & { wrapperClass?: string; }) => (
  <a
    href="https://t.me/ardalanamini"
    rel="noopener noreferrer"
    target="_blank"
    class={["hover:text-accent transition-colors", wrapperClass]}
    aria-label="Telegram"
  >
    <TelegramIcon {...properties} />
  </a>
));
