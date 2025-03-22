import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:7188", // Tu API backend
        changeOrigin: true,
        secure: false, // Importante si usas https con certificado local
      },
    },
  },
});
