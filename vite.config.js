import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// import dotenv from "dotenv";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SoYummy_FrontEnd_groupNo_1/",
  plugins: [react(), envCompatible()],
});

// import react from "@vitejs/plugin-react-swc";
// import { defineConfig } from "vite";
// import envCompatible from "vite-plugin-env-compatible";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/",
//   plugins: [react(), envCompatible()],
// });
