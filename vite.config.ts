import { defineConfig } from "vite";
import { vitePluginPreBundleNewUrl } from "@hiogawa/vite-plugin-pre-bundle-new-url";

const crossOriginHeaders = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp'
}

export default defineConfig({
  appType: "mpa",
  plugins: [
    vitePluginPreBundleNewUrl({
      debug: true
    }) as any,
    {
      name: "more-cross-origin",
      configureServer(server) {
        server.middlewares.use((_req, res, next) => {
          for (const [k, v] of Object.entries(crossOriginHeaders)) {
            res.setHeader(k, v);
          }
          next()
        })
      }
    }
  ],
  server: {
    headers: crossOriginHeaders
  },
})

/*

npx vite
open http://localhost:5173/example/basic

*/
