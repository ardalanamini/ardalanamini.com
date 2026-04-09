import { component$ } from "@builder.io/qwik";
import { LinkedInLink } from "~/components/social-links/linkedin";
import { TelegramLink } from "~/components/social-links/telegram";
import { GithubLink } from "~/components/social-links/github";
import { LuMail } from "@qwikest/icons/lucide";

export const Contact = component$(() => {
  return (
    <section id="connect" class="bg-accent text-bg-dark px-6 py-20">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="mb-8 text-5xl font-black tracking-tighter uppercase md:text-7xl">
          Establish <br /> Connection
        </h2>
        <p class="mb-12 text-lg font-bold opacity-80">
          Available for architectural consulting and high-performance software
          engineering.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:ardalanamini22@gmail.com"
            class="bg-bg-dark flex items-center gap-3 px-10 py-5 font-bold tracking-widest text-white uppercase transition-transform hover:scale-105"
          >
            <LuMail class="h-5 w-5" /> Send Packet
          </a>
          <div class="flex gap-4">
            <GithubLink
              wrapperClass="border-bg-dark/40 hover:bg-bg-dark rounded-full border-2 p-5 transition-all hover:text-white"
              class="h-6 w-6"
            />
            <LinkedInLink
              wrapperClass="border-bg-dark/40 hover:bg-bg-dark rounded-full border-2 p-5 transition-all hover:text-white"
              class="h-6 w-6"
            />
            <TelegramLink
              wrapperClass="border-bg-dark/40 hover:bg-bg-dark rounded-full border-2 p-5 transition-all hover:text-white"
              class="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
