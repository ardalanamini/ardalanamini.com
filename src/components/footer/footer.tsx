import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="border-line border-t px-6 py-12 text-center">
      <p class="text-[10px] tracking-widest text-gray-600 uppercase">
        © {new Date().getFullYear()} ARDALAN_AMINI // ALL RIGHTS RESERVED
      </p>
    </footer>
  );
});
