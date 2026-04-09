import { component$ } from "@builder.io/qwik";
import { LuActivity } from "@qwikest/icons/lucide";
import { Motion } from "~/integrations/react/motion";
import { EXPERIENCES } from "~/components/experience/experience";
import { PROJECTS } from "~/components/projects/projects";

export const Hero = component$(() => {
  return (
    <section class="px-6 pt-40 pb-20">
      <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Motion
          client:visible
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div class="bg-accent/10 border-accent/20 text-accent mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
            <LuActivity class="h-3 w-3" /> Open for Opportunities
          </div>
          <h1 class="mb-6 text-5xl leading-tight font-black md:text-7xl">
            Engineering <br />
            <span class="text-accent">Resilient</span> Systems.
          </h1>
          <p class="mb-8 max-w-lg text-lg leading-relaxed text-gray-400">
            I build the invisible engines that power the modern web.
          </p>
          <div class="flex flex-wrap gap-4">
            <button
              onClick$={() =>
                document.getElementById("connect")?.scrollIntoView()
              }
              class="bg-accent text-bg-dark px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-white"
            >
              Contact Me
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
              I'm Ardalan Amini, Software Engineer specializing in distributed
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
              {new Date().getFullYear() - 2016} years, {EXPERIENCES.length}{" "}
              roles, {PROJECTS.length}+ personal projects, 1 motivated software
              engineer
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
  );
});

const TerminalHeader = component$(() => {
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
});
