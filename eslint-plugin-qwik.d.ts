declare module "eslint-plugin-qwik" {
  import type { OxlintConfig } from "oxlint";

  export const configs: {
    recommended: {
      rules: NonNullable<OxlintConfig["rules"]>;
    };
  };
}
