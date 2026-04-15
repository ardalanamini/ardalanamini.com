import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />

        <QwikPartytown forward={["gtag", "dataLayer.push"]} />

        {/* Google tag (gtag.js) */}
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-R7PCV107HT"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R7PCV107HT');
          `}
        />
        {/* Google tag (gtag.js) */}

        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}

        <RouterHead />
      </head>

      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
