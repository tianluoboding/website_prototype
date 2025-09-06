# 🚀 WattUp Website - 快速启动指南

## 3步启动项目

### 1️⃣ 安装依赖
```bash
npm install
```

### 2️⃣ 启动开发服务器
```bash
npm run dev
```

### 3️⃣ 打开浏览器
访问: http://localhost:5173/website_prototype/

## ✅ 检查清单

- [ ] Node.js 已安装 (版本 16+)
- [ ] 项目依赖已安装 (`npm install`)
- [ ] 开发服务器已启动 (`npm run dev`)
- [ ] 浏览器能正常访问网站
- [ ] 所有页面和功能正常显示

## 🔧 如果遇到问题

### 端口被占用
```bash
# 方法1: 杀死进程
lsof -ti:5173 | xargs kill -9

# 方法2: 使用其他端口
npm run dev -- --port 3000
```

### 依赖问题
```bash
# 清除缓存重新安装
rm -rf node_modules package-lock.json
npm install
```

### 样式问题
```bash
# 重启开发服务器
npm run dev
```

## 📱 项目特色

- ✨ 现代化设计
- 📱 响应式布局  
- 🎬 视频展示
- 🤖 机器人介绍
- 📲 应用下载
- 🛡️ 保险服务

---

**需要帮助？** 查看完整文档: [README.md](./README.md)
