import { component$ } from "@builder.io/qwik";
import { LuCpu } from "@qwikest/icons/lucide";
import { GithubLink } from "~/components/social-links/github";
import { LinkedInLink } from "~/components/social-links/linkedin";
import { TelegramLink } from "~/components/social-links/telegram";

export const Header = component$(() => {
  return (
    <nav class="border-line bg-bg-dark/80 fixed top-0 right-0 left-0 z-50 border-b px-6 py-4 backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center justify-between">
        <button
          onClick$={() => window.scrollTo({ top: 0 })}
          class="group flex cursor-pointer items-center gap-2"
        >
          <LuCpu class="text-accent h-5 w-5 transition-transform group-hover:rotate-12" />
          <span class="font-bold tracking-tighter text-white">
            ARDALAN_AMINI
          </span>
        </button>
        <div class="hidden items-center gap-8 text-[11px] tracking-[0.2em] uppercase md:flex">
          {["Projects", "Experience", "Tech Stack", "Connect"].map((item) => (
            <button
              key={item}
              onClick$={() => {
                const id = item.toLowerCase().replace(" ", "-");

                document.getElementById(id)?.scrollIntoView();
              }}
              class="hover:text-accent cursor-pointer transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <div class="flex items-center gap-4">
          <GithubLink class="h-4 w-4" />
          <LinkedInLink class="h-4 w-4" />
          <TelegramLink class="h-4 w-4" />
        </div>
      </div>
    </nav>
  );
});
