import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuServer,
  LuDatabase,
  LuShieldCheck,
  LuCpu,
  LuActivity,
  LuCode,
  LuExternalLink,
  LuChevronRight,
  LuArrowLeft,
  LuArrowRight,
} from "@qwikest/icons/lucide";
import { Motion } from "~/integrations/react/motion";

const PROJECTS = [
  {
    title: "Distributed Task Queue",
    description:
      "A high-throughput task processing system built with Go and Redis. Open sourced for the community.",
    metrics: ["1.2k Stars", "MIT License", "v2.0.4"],
    tech: ["Go", "Redis", "gRPC", "Docker"],
    link: "#",
  },
  {
    title: "Auth Sentinel",
    description:
      "A zero-trust authentication library implementing OAuth2 and JWT. Secure by default.",
    metrics: ["850 Stars", "Apache-2.0", "v1.1.0"],
    tech: ["Node.js", "PostgreSQL", "Redis", "K8s"],
    link: "#",
  },
  {
    title: "Data Pipeline Engine",
    description:
      "Real-time ETL pipeline for processing multi-terabyte datasets. Highly extensible.",
    metrics: ["2.4k Stars", "GPL-3.0", "v3.2.1"],
    tech: ["Python", "Apache Kafka", "Elasticsearch"],
    link: "#",
  },
  {
    title: "Log Aggregator",
    description:
      "Distributed logging system with real-time indexing and search capabilities.",
    metrics: ["500 Stars", "MIT License", "v0.9.0"],
    tech: ["Rust", "Elasticsearch", "Fluentd"],
    link: "#",
  },
  {
    title: "Metrics Exporter",
    description:
      "Prometheus-compatible metrics exporter for legacy system monitoring.",
    metrics: ["320 Stars", "Apache-2.0", "v1.4.2"],
    tech: ["Go", "Prometheus", "Grafana"],
    link: "#",
  },
  {
    title: "Service Mesh Controller",
    description:
      "Control plane for managing microservices traffic and security policies.",
    metrics: ["1.1k Stars", "MIT License", "v2.1.0"],
    tech: ["C++", "Envoy", "Istio"],
    link: "#",
  },
];

const ARCHITECTURE_STACK = [
  {
    name: "Languages",
    icon: <LuCode class="h-5 w-5" />,
    items: ["Go", "Rust", "Python", "TypeScript"],
  },
  {
    name: "Databases",
    icon: <LuDatabase class="h-5 w-5" />,
    items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse"],
  },
  {
    name: "Infrastructure",
    icon: <LuServer class="h-5 w-5" />,
    items: ["AWS", "Kubernetes", "Docker", "Terraform"],
  },
  {
    name: "Security",
    icon: <LuShieldCheck class="h-5 w-5" />,
    items: ["OAuth2", "JWT", "TLS/SSL", "Pen-testing"],
  },
];

const EXPERIENCES = [
  {
    company: "CloudScale Systems",
    role: "Senior Backend Engineer",
    period: "2022 — Present",
    description:
      "Leading the core infrastructure team. Optimized database queries resulting in 40% reduction in latency.",
    achievements: [
      "Kubernetes Migration",
      "Go Microservices",
      "CI/CD Automation",
    ],
  },
  {
    company: "DataStream Corp",
    role: "Backend Developer",
    period: "2020 — 2022",
    description:
      "Developed real-time data processing pipelines using Apache Kafka and Python.",
    achievements: ["Kafka Integration", "ETL Optimization", "API Design"],
  },
  {
    company: "SecureNet Solutions",
    role: "Junior Software Engineer",
    period: "2018 — 2020",
    description:
      "Maintained legacy Java systems and assisted in the transition to a Node.js microservices architecture.",
    achievements: ["Unit Testing", "Bug Fixing", "Documentation"],
  },
];

function TerminalHeader() {
  return (
    <div class="terminal-header">
      <div class="dot bg-red-500/50" />
      <div class="dot bg-yellow-500/50" />
      <div class="dot bg-green-500/50" />
      <div class="ml-2 font-mono text-[10px] tracking-widest uppercase opacity-40">
        bash — 80x24
      </div>
    </div>
  );
}

export default component$(() => {
  return (
    <div class="grid-bg min-h-screen">
      {/* Navigation */}
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
            {["Open Source", "Experience", "Architecture", "Connect"].map(
              (item) => (
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
              ),
            )}
          </div>
          <div class="flex items-center gap-4">
            <a href="#" class="hover:text-accent transition-colors">
              <LuGithub class="h-4 w-4" />
            </a>
            <a href="#" class="hover:text-accent transition-colors">
              <LuLinkedin class="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="px-6 pt-40 pb-20">
        <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Motion
            client:visible
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div class="bg-accent/10 border-accent/20 text-accent mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
              <LuActivity class="h-3 w-3" /> System Status: Operational
            </div>
            <h1 class="mb-6 text-5xl leading-tight font-black md:text-7xl">
              Architecting <br />
              <span class="text-accent">Resilient</span> Systems.
            </h1>
            <p class="mb-8 max-w-lg text-lg leading-relaxed text-gray-400">
              Backend Engineer specializing in distributed systems,
              high-availability architectures, and performance optimization. I
              build the invisible engines that power the modern web.
            </p>
            <div class="flex flex-wrap gap-4">
              <button
                onClick$={() =>
                  document.getElementById("connect")?.scrollIntoView()
                }
                class="bg-accent text-bg-dark px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-white"
              >
                Contact Ardalan
              </button>
            </div>
          </Motion>

          <Motion
            client:visible
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            class="terminal-window"
          >
            <TerminalHeader />
            <div class="p-6 font-mono text-sm leading-relaxed">
              <div class="mb-2 flex gap-2">
                <span class="text-green-500">➜</span>
                <span class="text-blue-400">~</span>
                <span class="text-white">whoami</span>
              </div>
              <div class="mb-4 text-gray-400">
                Ardalan Amini: Backend Architect specializing in distributed
                systems, high-performance infrastructure, and scalable cloud
                solutions.
              </div>
              <div class="mb-2 flex gap-2">
                <span class="text-green-500">➜</span>
                <span class="text-blue-400">~</span>
                <span class="text-white">ls skills/core</span>
              </div>
              <div class="text-accent mb-4 grid grid-cols-2 gap-2">
                <div>• Distributed_Systems</div>
                <div>• API_Design</div>
                <div>• Database_Optimization</div>
                <div>• Cloud_Native</div>
              </div>
              <div class="mb-2 flex gap-2">
                <span class="text-green-500">➜</span>
                <span class="text-blue-400">~</span>
                <span class="text-white">uptime</span>
              </div>
              <div class="text-gray-400">
                up 5 years, 142 days, 12:44, 1 user, load average: 0.05, 0.03,
                0.01
              </div>
              <div class="mt-4 flex animate-pulse gap-2">
                <span class="text-green-500">➜</span>
                <span class="text-blue-400">~</span>
                <span class="bg-accent h-5 w-2" />
              </div>
            </div>
          </Motion>
        </div>
      </section>

      {/* Open Source Projects Section */}
      <section
        id="open-source"
        class="border-line bg-surface/50 overflow-hidden border-t px-6 py-20"
      >
        <div class="mx-auto max-w-7xl">
          <div class="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 class="mb-2 text-3xl font-bold">Open Source</h2>
              <p class="text-sm tracking-widest text-gray-500 uppercase">
                Public Repositories & Contributions
              </p>
            </div>
            <div class="flex items-center gap-4">
              <div class="mr-4 text-right">
                <span class="text-accent text-xs font-bold">
                  {PROJECTS.length.toString().padStart(2, "0")} REPOSITORIES
                </span>
              </div>
              <div class="flex gap-2">
                <button
                  onClick$={() =>
                    document
                      .getElementById("project-carousel")
                      ?.scrollBy({ left: -400, behavior: "smooth" })
                  }
                  class="border-line hover:border-accent hover:text-accent bg-bg-dark/50 rounded-lg border p-2 transition-colors"
                >
                  <LuArrowLeft class="h-4 w-4" />
                </button>
                <button
                  onClick$={() =>
                    document
                      .getElementById("project-carousel")
                      ?.scrollBy({ left: 400, behavior: "smooth" })
                  }
                  class="border-line hover:border-accent hover:text-accent bg-bg-dark/50 rounded-lg border p-2 transition-colors"
                >
                  <LuArrowRight class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div
            id="project-carousel"
            class="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PROJECTS.map((project, index) => (
              <Motion
                client:visible
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                class="terminal-window group hover:border-accent/50 min-w-[320px] snap-start transition-colors md:min-w-100"
              >
                <div class="bg-line/30 border-line flex items-center justify-between border-b px-4 py-2">
                  <span class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    {project.title.toLowerCase().replace(/ /g, "-")}.git
                  </span>
                  <div class="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </div>
                <div class="p-6">
                  <p class="mb-6 text-sm text-gray-400">
                    {project.description}
                  </p>
                  <div class="mb-6 space-y-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        class="text-accent flex items-center gap-2 text-[10px] font-bold tracking-tighter uppercase"
                      >
                        <LuChevronRight class="h-3 w-3" /> {metric}
                      </div>
                    ))}
                  </div>
                  <div class="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        class="bg-line/50 border-line rounded border px-2 py-1 text-[9px] text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    class="hover:text-accent inline-flex items-center gap-2 text-xs font-bold text-white transition-colors"
                  >
                    View Source <LuExternalLink class="h-3 w-3" />
                  </a>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" class="px-6 py-20">
        <div class="mx-auto max-w-4xl">
          <div class="mb-16">
            <h2 class="mb-2 text-3xl font-bold">Deployment History</h2>
            <p class="text-sm tracking-widest text-gray-500 uppercase">
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
                    <span class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      {exp.company}
                    </span>
                  </div>
                  <div class="p-6">
                    <h3 class="mb-2 text-xl font-bold">{exp.role}</h3>
                    <p class="mb-4 text-sm leading-relaxed text-gray-400">
                      {exp.description}
                    </p>
                    <div class="flex flex-wrap gap-3">
                      {exp.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          class="bg-line/20 flex items-center gap-2 rounded px-2 py-1 text-[9px] font-bold tracking-tighter text-gray-500 uppercase"
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
              <span class="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">
                -- END_OF_LOG --
              </span>
            </Motion>
          </div>
        </div>
      </section>

      {/* Architecture Stack */}
      <section
        id="architecture"
        class="border-line bg-surface/50 border-t px-6 py-20"
      >
        <div class="mx-auto max-w-7xl">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-4xl font-bold">Architecture Stack</h2>
            <p class="mx-auto max-w-xl text-gray-500">
              The foundational technologies I use to build scalable, secure, and
              performant backend infrastructures.
            </p>
          </div>

          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ARCHITECTURE_STACK.map((stack, index) => (
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
                  <span class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    {stack.name.toLowerCase()}.config
                  </span>
                  <div class="text-accent/50 group-hover:text-accent transition-colors">
                    {stack.icon}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="mb-4 text-lg font-bold">{stack.name}</h3>
                  <ul class="space-y-2">
                    {stack.items.map((item) => (
                      <li
                        key={item}
                        class="flex items-center gap-2 text-sm text-gray-500"
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

      {/* Contact Section */}
      <section id="connect" class="bg-accent text-bg-dark px-6 py-20">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-8 text-5xl font-black tracking-tighter uppercase md:text-7xl">
            Initialize <br /> Connection.
          </h2>
          <p class="mb-12 text-lg font-bold opacity-80">
            Available for architectural consulting and high-performance backend
            development.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:ardalanamini22@gmail.com"
              class="bg-bg-dark flex items-center gap-3 px-10 py-5 font-bold tracking-widest text-white uppercase transition-transform hover:scale-105"
            >
              <LuMail class="h-5 w-5" /> Send Packet
            </a>
            <div class="flex gap-4">
              <a
                href="#"
                class="border-bg-dark/20 hover:bg-bg-dark rounded-full border-2 p-5 transition-all hover:text-white"
              >
                <LuGithub class="h-6 w-6" />
              </a>
              <a
                href="#"
                class="border-bg-dark/20 hover:bg-bg-dark rounded-full border-2 p-5 transition-all hover:text-white"
              >
                <LuLinkedin class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="border-line border-t px-6 py-12 text-center">
        <p class="text-[10px] tracking-widest text-gray-600 uppercase">
          © {new Date().getFullYear()} ARDALAN_AMINI // ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Ardalan Amini",
  meta: [
    {
      name: "description",
      content: "Ardalan Amini Personal Website",
    },
  ],
};
