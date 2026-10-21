import type { JSXOutput } from "@builder.io/qwik";
import { type PartytownConfig, partytownSnippet } from "@qwik.dev/partytown/integration";

/**
 * Props for `<QwikPartytown/>`, which extends the Partytown Config.
 *
 * https://github.com/BuilderIO/partytown#config
 *
 * @public
 */
export type PartytownProps = PartytownConfig;

/**
 * @public
 * You can pass setting with props
 */
export function QwikPartytown(properties: PartytownProps): JSXOutput {
  return <script dangerouslySetInnerHTML={partytownSnippet(properties)} />;
}
