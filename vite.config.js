import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SoYummy_groupNo_1/",
  plugins: [react()],
});
