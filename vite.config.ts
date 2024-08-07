import { defineConfig } from "vite";
import { vitePluginPreBundleNewUrl } from "@hiogawa/vite-plugin-pre-bundle-new-url";

export default defineConfig({
  appType: "mpa",
  plugins: [
    vitePluginPreBundleNewUrl({
      debug: true
    }) as any,
  ],
  optimizeDeps: {
    entries: ["./example/basic.html"]
  }
})

/*

npx vite
open http://localhost:5173/example/basic

*/
