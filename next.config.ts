import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PUBLIC_DB_CONNECTION: "mongodb+srv://glickyael3:gR4fhOFVijyW96H4@cluster0.0go66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
};

export default nextConfig;
