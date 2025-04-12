# 使用 Node.js 20 作為基礎映像
FROM node:20-alpine AS base

# 安裝依賴階段
FROM base AS deps
WORKDIR /app

# 複製 package.json 和 package-lock.json (如果存在)
COPY package.json package-lock.json* ./

# 安裝依賴
RUN npm ci

# 構建階段
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 構建應用
RUN npm run build

# 生產階段
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# 創建非 root 用戶並設置權限
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# 複製構建結果和必要文件
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 設置環境變量以便 Cloud Run 能夠找到應用
ENV PORT 8080
ENV HOSTNAME "0.0.0.0"

# 啟動應用
CMD ["node", "server.js"]