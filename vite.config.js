import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  publicDir: "../public",
  base: "./",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "src/index.html"),
        registro: resolve(import.meta.dirname, "src/registro.html"),
      },
    },
  },
});
