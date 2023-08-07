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
      entry: [
        path.resolve(__dirname, "./index.tsx")
      ],
      formats: ["es"],
      name: "NeetoTimezoneSelector",
      /*
      TODO implement different named outputs:
      dist/index.es.js
      dist/react.es.js

      // package.json
      exports: {
        "index": "./dist/index.es.js",
        "react": "./dist/react.es.js"
      }

      Target goal in host app:
      import NeetoTimezoneSelector from "neeto-timezones"
      import NeetoTimezoneSelector from "neeto-timezones/react"
      */
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
