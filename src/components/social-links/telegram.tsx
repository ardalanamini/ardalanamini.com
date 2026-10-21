import { type SVGProps, component$ } from "@builder.io/qwik";
import { SiTelegram } from "@qwikest/icons/simpleicons";
import { clsx } from "clsx";

export const TelegramLink = component$(({
  wrapperClass,
  ...properties
}: SVGProps<SVGSVGElement> & { wrapperClass?: string; }) => (
  <a
    href="https://t.me/ardalanamini"
    rel="noopener noreferrer"
    target="_blank"
    class={clsx("hover:text-accent transition-colors", wrapperClass)}
    aria-label="Telegram"
  >
    <SiTelegram {...properties} />
  </a>
));
