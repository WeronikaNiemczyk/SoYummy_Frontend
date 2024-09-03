import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// import dotenv from "dotenv";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SoYummy_Frontend/",
  plugins: [react(), envCompatible()],
  build: {
    rollupOptions: {
      input: "./src/main.jsx", // Upewnij się, że ścieżka jest poprawna
    },
  },
});

// import react from "@vitejs/plugin-react-swc";
// import { defineConfig } from "vite";
// import envCompatible from "vite-plugin-env-compatible";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/",
//   plugins: [react(), envCompatible()],
// });
