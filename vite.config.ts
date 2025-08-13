import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change base path depending on environment
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    // Allow connections from outside the container
    host: '0.0.0.0',
    // Enable HMR
    hmr: {
      // Use the host from the browser's URL instead of a hardcoded port
      host: 'portfolio.exostia.wip',
      protocol: 'wss',
    }
  }
});
