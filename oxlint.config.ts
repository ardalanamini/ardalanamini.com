import { configs } from "eslint-plugin-qwik";
import { defineConfig } from "oxlint";
import { config } from "oxlint-config-noir";

export default defineConfig({
  extends  : [config.recommended],
  jsPlugins: ["eslint-plugin-qwik"],
  rules    : {
    ...configs.recommended.rules,

    "@stylistic/no-extra-parens"         : "off",
    "@stylistic/lines-around-comment"    : "off",
    "js-plugin-unicorn/name-replacements": "off",
    "import/exports-last"                : "off",

    // shortcut: Oxlint JS plugins lack TS parser services; re-enable when supported.
    "qwik/valid-lexical-scope": "off",
  },
  ignorePatterns: ["worker-configuration.d.ts"],
});
