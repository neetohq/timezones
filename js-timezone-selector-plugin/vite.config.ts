/* eslint-disable no-underscore-dangle */
import * as path from "path";
import url from "url";

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";

// TODO import dts from "vite-plugin-dts";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,

    lib: {
      entry: path.resolve(__dirname, "./src/main.tsx"),
      formats: ["iife", "es"],
      name: "NeetoTimezoneSelector",
      fileName: (format) => `index.${format}.js`,
    },
    target: "modules",
    minify: "terser",
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [],
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [
          "tailwindcss",
        ],
      },
    },
  },
});
