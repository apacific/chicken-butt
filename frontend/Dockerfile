# ---- Builder ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Runner ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/postcss.config.* ./ 
RUN npm i --omit=dev
EXPOSE 3000
CMD ["npm","start"]
