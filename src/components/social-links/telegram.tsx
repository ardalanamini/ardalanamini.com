import { component$, SVGProps } from "@builder.io/qwik";
import { SiTelegram } from "@qwikest/icons/simpleicons";
import { clsx } from "clsx";

export const TelegramLink = component$(
  ({
    wrapperClass,
    ...props
  }: SVGProps<SVGSVGElement> & { wrapperClass?: string }) => {
    return (
      <a
        href="https://t.me/ardalanamini"
        rel="noopener noreferrer"
        target="_blank"
        class={clsx("hover:text-accent transition-colors", wrapperClass)}
        aria-label="Telegram"
      >
        <SiTelegram {...props} />
      </a>
    );
  },
);
