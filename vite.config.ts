import { defineConfig } from "vite";
import { vitePluginPreBundleNewUrl } from "@hiogawa/vite-plugin-pre-bundle-new-url";

export default defineConfig({
  appType: "mpa",
  plugins: [
    vitePluginPreBundleNewUrl({
      debug: true
    }) as any,
  ],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
})

/*

npx vite
open http://localhost:5173/example/basic.html

*/
