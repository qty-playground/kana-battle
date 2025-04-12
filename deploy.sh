#!/bin/bash
set -e

# 變數設定
PROJECT_ID="twjug-lite"
IMAGE_NAME="kana-battle"
REGION="asia-east1"
SERVICE_NAME="kana-battle"

# 顯示執行資訊
echo "部署 $SERVICE_NAME 到 Google Cloud Run"
echo "專案: $PROJECT_ID"
echo "區域: $REGION"

# 構建與推送映像
echo "正在構建與推送 Docker 映像..."
cd "$(dirname "$0")/kana-battle"
IMAGE_URL="gcr.io/$PROJECT_ID/$IMAGE_NAME:$(date +%Y%m%d-%H%M%S)"
gcloud builds submit --tag $IMAGE_URL

# 部署到 Cloud Run
echo "正在部署到 Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE_URL \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated

echo "部署完成!"
echo "您的應用程式已部署至: $(gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)')"