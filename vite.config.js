import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
  ],
  base: "/f2e-web/", // github page use
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0",
    port: 2000,
    // proxy: {
    //   "/api": {
    //     target: "http://google.com",
    //     changeOrigin: true,
    //     // rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    // }
  }
});
