# 🚀 WattUp Website - 部署指南

## GitHub Pages 自动部署

项目已配置自动部署到GitHub Pages，每次推送代码都会自动更新网站。

### 设置步骤

1. **推送代码到GitHub**
```bash
git add .
git commit -m "feat: 初始化WattUp网站"
git push origin main
```

2. **启用GitHub Pages**
   - 进入GitHub仓库
   - 点击 `Settings` → `Pages`
   - Source选择 `GitHub Actions`
   - 保存设置

3. **访问网站**
   - 网站地址: `https://your-username.github.io/website_prototype/`
   - 部署状态可在 `Actions` 标签页查看

## 手动部署

### 构建项目
```bash
npm run build
```

### 部署到静态托管服务

#### Netlify
1. 拖拽 `dist/` 文件夹到 Netlify
2. 或连接GitHub仓库自动部署

#### Vercel
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

#### 其他平台
将 `dist/` 目录内容上传到任何静态托管服务。

## 环境变量配置

### 开发环境
```bash
# .env.local
VITE_APP_URL=http://localhost:5173/website_prototype/
VITE_QR_CODE_URL=https://your-app-url.com
```

### 生产环境
```bash
# .env.production
VITE_APP_URL=https://your-domain.com
VITE_QR_CODE_URL=https://your-app-url.com
```

## 自定义域名

### GitHub Pages
1. 在仓库根目录添加 `CNAME` 文件
2. 内容为你的域名: `your-domain.com`
3. 在DNS设置中添加CNAME记录

### Netlify/Vercel
在平台设置中添加自定义域名。

## 性能优化

### 图片优化
- 使用WebP格式
- 压缩图片大小
- 添加懒加载

### 代码分割
项目已配置自动代码分割，无需额外配置。

### CDN加速
建议使用CDN服务加速静态资源加载。

## 监控和分析

### Google Analytics
在 `index.html` 中添加GA代码：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 错误监控
可集成Sentry等错误监控服务。

## 备份策略

### 代码备份
- GitHub仓库自动备份
- 定期创建release标签

### 资源备份
- 图片和视频文件
- 配置文件
- 部署脚本

## 故障排除

### 部署失败
1. 检查GitHub Actions日志
2. 确认构建无错误
3. 检查环境变量配置

### 网站无法访问
1. 检查域名DNS设置
2. 确认GitHub Pages状态
3. 清除浏览器缓存

### 样式问题
1. 检查Tailwind CSS配置
2. 确认构建包含所有样式
3. 检查CDN缓存

---

**部署成功！** 🎉 您的WattUp网站现在可以在线访问了！
