import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // 啟用獨立輸出模式，適合容器化部署
};

export default nextConfig;
