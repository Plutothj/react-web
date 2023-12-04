import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/file", component: "file" },
  ],
  npmClient: "pnpm",
});
