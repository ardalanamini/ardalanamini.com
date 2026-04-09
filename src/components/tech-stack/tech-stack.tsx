import { component$ } from "@builder.io/qwik";
import {
  LuChevronRight,
  LuCode,
  LuDatabase,
  LuServer,
  LuShieldCheck,
} from "@qwikest/icons/lucide";
import { Motion } from "~/integrations/react/motion";

export const TechStack = component$(() => {
  return (
    <section
      id="tech-stack"
      class="border-line bg-surface/50 border-t px-6 py-20"
    >
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-4xl font-bold">Tech Stack</h2>
          <p class="mx-auto max-w-xl text-gray-300">
            The foundational technologies I use to build scalable, secure, and
            performant backend infrastructures.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((stack, index) => (
            <Motion
              client:visible
              key={stack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              class="terminal-window group hover:border-accent/50 transition-colors"
            >
              <div class="bg-line/30 border-line flex items-center justify-between border-b px-4 py-2">
                <span class="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                  {stack.name.toLowerCase().replaceAll(" ", "_")}.config
                </span>
                <div class="text-accent/80 group-hover:text-accent transition-colors">
                  {stack.icon}
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-lg font-bold">{stack.name}</h3>
                <ul class="space-y-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      class="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <LuChevronRight class="text-accent h-3 w-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
});

export const TECH_STACK = [
  {
    name: "Languages",
    icon: <LuCode class="h-5 w-5" />,
    items: ["TypeScript", "Go", "PHP", "C++"],
  },
  {
    name: "Databases & Storage",
    icon: <LuDatabase class="h-5 w-5" />,
    items: ["MongoDB", "PostgreSQL", "Redis", "S3"],
  },
  {
    name: "Infrastructure",
    icon: <LuServer class="h-5 w-5" />,
    items: ["Kubernetes", "Docker", "AWS", "Terraform"],
  },
  {
    name: "Security",
    icon: <LuShieldCheck class="h-5 w-5" />,
    items: ["OAuth2", "JWT", "TLS/SSL", "Pen-testing"],
  },
];
