// 👇🏽 this tells Qwik that the JSX here is React
/** @jsxImportSource react */

import { type HTMLMotionProps, motion } from "motion/react";
import { qwikify$ } from "@builder.io/qwik-react";

export const Motion = qwikify$<HTMLMotionProps<"div"> & { class?: string }>(
  motion.div,
);
