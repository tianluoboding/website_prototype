#!/bin/bash

# WattUp Website Setup Script
# 自动设置开发环境

echo "🚀 正在设置WattUp网站开发环境..."

# 检查Node.js版本
echo "📋 检查Node.js版本..."
node_version=$(node -v 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Node.js版本: $node_version"
else
    echo "❌ 请先安装Node.js (版本16+)"
    echo "下载地址: https://nodejs.org/"
    exit 1
fi

# 检查npm
echo "📋 检查npm..."
npm_version=$(npm -v 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ npm版本: $npm_version"
else
    echo "❌ npm未安装"
    exit 1
fi

# 安装依赖
echo "📦 安装项目依赖..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功"
else
    echo "❌ 依赖安装失败"
    exit 1
fi

# 检查端口
echo "🔍 检查端口5173..."
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  端口5173已被占用，正在尝试释放..."
    lsof -ti:5173 | xargs kill -9 2>/dev/null
    sleep 2
fi

# 启动开发服务器
echo "🌟 启动开发服务器..."
echo "📱 网站地址: http://localhost:5173/website_prototype/"
echo "🛑 按 Ctrl+C 停止服务器"
echo ""

npm run dev
