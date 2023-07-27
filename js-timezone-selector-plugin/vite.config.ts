import * as path from "path";
import url from 'url'

import { defineConfig } from "vite";

// TODO import dts from "vite-plugin-dts";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,

    lib: {
      entry: [path.resolve(__dirname, "./src/main.tsx"), path.resolve(__dirname, "./react/index.tsx")],
      formats: ["es"],
      name: "NeetoTimezoneSelector",
      fileName: (format) => `index.${format}.js`,
    },
    target: "modules",
    minify: "terser",
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [],
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [
          'tailwindcss',
        ],
      },
    },
  },
});
