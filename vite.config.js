import { defineConfig } from "vite";
import tailwindcssVite from "@tailwindcss/vite";

export default defineConfig({
  // Project root: theme directory.
  root: ".",
  plugins: [
    tailwindcssVite(),
    FullReload(["./templates/**/*.html.twig", "./components/**/*.twig"]),
  ],
  server: {
    // Make server accessible from host machine (DDEV).
    host: "0.0.0.0",
    // You can change this port if you want.
    port: 3308,
    // Fail if port is taken, instead of incrementing.
    strictPort: true,
    hmr: {
      // Your DDEV site hostname.
      host: "d11.ddev.site",
      port: 3308,
      protocol: "ws",
    },
    watch: {
      // Needed in many Docker environments.
      usePolling: true,
    },
  },
  build: {
    // Output directory for production build.
    outDir: "dist",
    // Clean outDir on build.
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Your main entry CSS.
        main: "./src/tailwind.css",
        // Add other entries here if you have more, e.g. './src/main.js'.
      },
    },
  },
});
