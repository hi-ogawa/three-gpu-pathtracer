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
  build: {
    rollupOptions: {
      input: ["./example/index.html", "./example/basic.html"]
    }
  },
})

/*

npx vite --force
open http://localhost:5173/example/basic.html

// however build fails
// (should be fixed in https://github.com/vitejs/vite/pull/17846)
npx vite build
[commonjs--resolver] Circular worker imports detected. Vite does not support it. Import chain: node_modules/three-mesh-bvh/src/workers/parallelMeshBVH.worker.js -> node_modules/three-mesh-bvh/src/workers/parallelMeshBVH.worker.js
*/
