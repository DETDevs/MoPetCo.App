import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy para tu backend local
      "/api": {
        target: "https://localhost:7188",
        changeOrigin: true,
        secure: false,
      },

      // Proxy para Google Maps API
      "/mapsapi": {
        target: "https://maps.googleapis.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mapsapi/, ""), // deja la ruta original de Maps
      },
    },
  },
});
