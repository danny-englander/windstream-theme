import { defineConfig } from 'vite';
import tailwindcssVite from '@tailwindcss/vite';

export default defineConfig({
  root: '.', // Project root: theme directory
  plugins: [
    tailwindcssVite(),
  ],
  server: {
    host: '0.0.0.0', // Make server accessible from host machine (DDEV)
    port: 12345,      // You can change this port if you want
    strictPort: true, // Fail if port is taken, instead of incrementing
    hmr: {
      host: 'd11.ddev.site', // Your DDEV site hostname
      port: 12345,
      protocol: 'ws',
    },
    watch: {
      usePolling: true, // Needed in many Docker environments
    },
  },
  build: {
    outDir: 'dist',      // Output directory for production build
    emptyOutDir: true,   // Clean outDir on build
    rollupOptions: {
      input: {
        main: './src/tailwind.css', // Your main entry CSS
        // add other entries here if you have more, e.g. './src/main.js'
      },
    },
  },
});
