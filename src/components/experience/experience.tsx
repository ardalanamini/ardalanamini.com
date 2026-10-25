import { component$ } from "@builder.io/qwik";
import { EXPERIENCES, SECTIONS } from "~/content/home";
import { ActivityIcon } from "~/icons/activity";
import { ChevronRightIcon } from "~/icons/chevron-right";
import { revealOnce$ } from "~/integrations/reveal";

export const Experience = component$(() => (
  <section id="experience" class="px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <div class="mb-16">
        <h2 class="mb-2 text-3xl font-bold">{SECTIONS.experience.title}</h2>

        <p class="text-sm tracking-widest text-gray-400 uppercase">
          {SECTIONS.experience.description}
        </p>
      </div>

      <div class="relative space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={exp.company}
            data-reveal="left"
            onQVisible$={revealOnce$}
            // oxlint-disable-next-line no-magic-numbers
            style={{ "--reveal-delay": `${ index * 100 }ms` }}
            class="relative my-12 pl-12"
          >
            {/* Connection Line */}
            <div class="bg-line absolute top-10 -bottom-12 left-[17.5px] w-px" />

            <div
              class="bg-bg-dark border-accent absolute top-1.5 left-0 z-10 flex h-9 w-9 items-center justify-center
                rounded-full border-2"
            >
              <ActivityIcon class="text-accent h-4 w-4" />
            </div>

            <div class="terminal-window">
              <div class="bg-line/30 border-line flex items-center justify-between border-b px-4 py-2">
                <span class="text-accent text-[10px] font-bold tracking-widest uppercase">
                  {exp.period}
                </span>

                <span class="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                  {exp.company}
                </span>
              </div>

              <div class="p-6">
                <h3 class="mb-2 text-xl font-bold">{exp.role}</h3>

                <p class="mb-4 text-sm leading-relaxed text-gray-300">
                  {exp.description}
                </p>

                <div class="flex flex-wrap gap-3">
                  {exp.achievements.map(achievement => (
                    <div
                      key={achievement}
                      class="bg-line/20 flex items-center gap-2 rounded px-2 py-1 text-[9px] font-bold tracking-tighter
                        text-gray-300 uppercase"
                    >
                      <ChevronRightIcon class="text-accent h-3 w-3" />
                      {" "}
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End of Log Marker */}
        <div
          data-reveal="fade"
          onQVisible$={revealOnce$}
          class="relative flex items-center gap-4 pl-12"
        >
          <div class="bg-line absolute top-0 left-3.25 h-2.75 w-2.75 rotate-45" />

          <span class="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
            -- END_OF_LOG --
          </span>
        </div>
      </div>
    </div>
  </section>
));
