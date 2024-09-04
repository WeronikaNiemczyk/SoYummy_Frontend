import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// import dotenv from "dotenv";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SoYummy_Frontend/",
  plugins: [react(), envCompatible()],
  build: {},
});

// import react from "@vitejs/plugin-react-swc";
// import { defineConfig } from "vite";
// import envCompatible from "vite-plugin-env-compatible";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/",
//   plugins: [react(), envCompatible()],
// });
