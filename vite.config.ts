import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import fs from "node:fs";
import { hostname } from "node:os";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "/src"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    https: {
      key: fs.readFileSync(
        `${process.env.HOME}/.local-certs/dev-servers/${
          hostname().split(".local")[0]
        }/key.pem`
      ),
      cert: fs.readFileSync(
        `${process.env.HOME}/.local-certs/dev-servers/${
          hostname().split(".local")[0]
        }/cert.pem`
      ),
    },
    port: 3715,
  },
});
