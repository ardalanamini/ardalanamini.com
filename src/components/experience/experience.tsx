import { component$ } from "@builder.io/qwik";
import { LuActivity, LuChevronRight } from "@qwikest/icons/lucide";
import { Motion } from "~/integrations/react/motion";

export const Experience = component$(() => {
  return (
    <section id="experience" class="px-6 py-20">
      <div class="mx-auto max-w-4xl">
        <div class="mb-16">
          <h2 class="mb-2 text-3xl font-bold">Experience</h2>
          <p class="text-sm tracking-widest text-gray-400 uppercase">
            System Logs // Professional Experience
          </p>
        </div>

        <div class="relative space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <Motion
              client:visible
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              class="relative my-12 pl-12"
            >
              {/* Connection Line */}
              <div class="bg-line absolute top-10 -bottom-12 left-[17.5px] w-px" />

              <div class="bg-bg-dark border-accent absolute top-1.5 left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2">
                <LuActivity class="text-accent h-4 w-4" />
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
                    {exp.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        class="bg-line/20 flex items-center gap-2 rounded px-2 py-1 text-[9px] font-bold tracking-tighter text-gray-300 uppercase"
                      >
                        <LuChevronRight class="text-accent h-3 w-3" />{" "}
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Motion>
          ))}

          {/* End of Log Marker */}
          <Motion
            client:visible
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            class="relative flex items-center gap-4 pl-12"
          >
            <div class="bg-line absolute top-0 left-3.25 h-2.75 w-2.75 rotate-45" />
            <span class="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
              -- END_OF_LOG --
            </span>
          </Motion>
        </div>
      </div>
    </section>
  );
});

export const EXPERIENCES = [
  {
    company: "Xcoins",
    role: "Senior Software Engineer - Back End Team Lead",
    period: "Sep 2022 - Nov 2025",
    description: "Crypto currency exchange and payment processing platform.",
    achievements: [
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "AdaKerja",
    role: "Senior Software Engineer",
    period: "Jul 2020 — Jul 2022",
    description:
      "Attendance & Payroll management system that consists of two sides, employers & job seekers.",
    achievements: [
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "AWS Lambda",
    ],
  },
  {
    company: "AInfluencer",
    role: "Senior Back End Developer",
    period: "Jul 2019 — Jul 2020",
    description:
      "AI-based Instagram social marketing platform, editing, suggesting & automating posts & stories for influencers & connecting them to the suitable accounts for advertisement purposes.",
    achievements: ["Express.js", "TypeScript", "Laravel", "MongoDB", "CI/CD"],
  },
  {
    company: "Chibaki",
    role: "Senior Back End Developer",
    period: "Aug 2018 — Feb 2019",
    description:
      "Online platform to find local professionals suitable for the posted jobs that consisted of two sides, employers & professionals.",
    achievements: ["Express.js", "Mongoose.js", "Jest", "MongoDB", "Docker"],
  },
  {
    company: "Jahangostar Pars Raden",
    role: "Software Engineer",
    period: "Nov 2016 — Sep 2018",
    description:
      "Cloud based human resource management system allowing HR teams and business owners to manage and automate contracts, attendances, leaves & salaries.",
    achievements: ["Laravel", "MariaDB", "React.js", "Redis", "Docker"],
  },
];
