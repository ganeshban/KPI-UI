import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ProxyOptions } from "vite";

const API_PROXY_TARGET = process.env.VITE_BACKEND_URL;
const AUTH_TOKEN = `Bearer ${process.env.VITE_API_TOKEN}`;

// List of proxy paths
const proxyPaths = ["/api/special", "/api/secure", "/api/protected"];

// Create proxy entries with custom headers
const proxyConfig: Record<string, string | ProxyOptions> = {};

proxyPaths.forEach((path) => {
  proxyConfig[path] = {
    target: API_PROXY_TARGET,
    configure: (proxy) => {
      proxy.on("proxyReq", (proxyReq) => {
        proxyReq.setHeader("Authorization", AUTH_TOKEN);
        proxyReq.setHeader("X-Custom-Header", "custom-value");
      });
    },
  };
});

export default defineConfig({
  server: {
    proxy: proxyConfig,
  },
  plugins: [react()],
});
