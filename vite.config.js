import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: [
      "d340b953-115b-4604-8f66-3945a1275777-00-2unguwyvoaq44.riker.replit.dev"
    ]
  }
});
