import { $, type QwikVisibleEvent } from "@builder.io/qwik";

export const revealOnce$ = $((_: QwikVisibleEvent, element: Element) => {
  element.setAttribute("data-revealed", "");
});
