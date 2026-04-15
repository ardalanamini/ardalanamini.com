import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Contact } from "~/components/contact/contact";
import { Experience } from "~/components/experience/experience";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { Hero } from "~/components/hero/hero";
import { Projects } from "~/components/projects/projects";
import { TechStack } from "~/components/tech-stack/tech-stack";

export default component$(() => {
  return (
    <div class="grid-bg min-h-screen">
      <Header />

      <Hero />

      <Projects />

      <Experience />

      <TechStack />

      <Contact />

      <Footer />
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

    // Facebook Meta Tags
    {
      property: "og:url",
      content: "https://ardalanamini.com",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "Ardalan Amini",
    },
    {
      property: "og:description",
      content: "Ardalan Amini Personal Website",
    },
    {
      property: "og:image",
      content: "/og.webp",
    },
  ],
};
