# ardalanamini.com

My Personal Portfolio

## Qwik City App ⚡️

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `pnpm qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
pnpm qwik add # or `pnpm qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `pnpm start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
pnpm preview # or `pnpm preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
pnpm build # or `pnpm build`
```

## Cloudflare Workers

Cloudflare's [wrangler](https://github.com/cloudflare/wrangler) CLI can be used to preview a production build locally. To start a local server, run:

```
pnpm serve
```

Then visit [http://localhost:8787/](http://localhost:8787/)

### Markdown responses

The homepage returns Markdown when `Accept` explicitly prefers `text/markdown` over HTML, including equal quality weights.
Missing headers and wildcard-only requests return HTML. Both representations support `GET` and `HEAD` and use
`Vary: Accept` with `Cache-Control: no-store`; static asset caching is unchanged.

Homepage content lives in `src/content/home.ts`. The HTML components and `src/markdown/home.ts` use that data, with
`mdast-util-to-markdown` serializing the Markdown document. The build writes `dist/index.md` alongside the prerendered HTML.
Use the Node version in `.node-version` for the build scripts and tests.
`pnpm test` builds the site before testing the Markdown output, shared response handling, and compiled Worker entry point.

To verify production behavior locally, run `pnpm build`, then `pnpm serve`:

```shell
curl -H 'Accept: text/markdown' http://localhost:8787/
curl -I -H 'Accept: text/markdown' http://localhost:8787/
pnpm test
```

Negotiation runs in the Cloudflare Worker; plain Vite development and preview continue serving HTML.
For a future page, add its Markdown renderer and build output in `scripts/build-markdown.mjs`, register the artifact in
`MARKDOWN_PAGES` in `src/markdown/response.ts`, and add its URL to `assets.run_worker_first` in `wrangler.jsonc`.
The shared `serveMarkdownPage` helper can be reused by another host's request handler and asset-fetching adapter.

### Deployments

[Cloudflare Workers](https://workers.cloudflare.com/) can be deployed using the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/).

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/workers-and-pages).

Once authenticated, you can deploy your Worker:

```
pnpm deploy
```

### Configuration

The `wrangler.jsonc` file contains your Worker configuration. Key settings include:

- **name**: Your Worker's name
- **main**: Path to your Worker script (default: `./dist/_worker.js`)
- **compatibility_date**: The date used for compatibility with the Workers runtime
- **assets**: Configuration for serving static assets
- **bindings**: Resources your Worker can interact with (KV, R2, D1, etc.)

After adding any binding, use this command to regenerate the worker-configuration.d.ts file

```
pnpm cf-typegen
```

For more details, see the [Wrangler configuration documentation](https://developers.cloudflare.com/workers/wrangler/configuration/).

### Bindings

Cloudflare Workers can interact with various Cloudflare resources through bindings:

- **KV**: Key-value storage
- **R2**: Object storage
- **D1**: SQL database
- **Durable Objects**: Strongly consistent storage
- **Queues**: Message queues
- **AI**: AI inference

Configure bindings in your `wrangler.jsonc` file. See the [bindings documentation](https://developers.cloudflare.com/workers/runtime-apis/bindings/) for more information.
