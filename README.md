# WattUp Website Prototype

一个现代化的单页营销网站，展示WattUp移动应用和机器人品牌。

## 🌐 在线演示

**直接访问网站**: https://tianluoboding.github.io/website_prototype/

> 💡 **任何人都可以直接点击这个链接查看网站，无需安装任何软件！**

## 🚀 快速开始

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 安装和运行

1. **克隆项目**
```bash
git clone <your-repo-url>
cd website_prototype
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **打开浏览器**
访问: http://localhost:5173/website_prototype/

## 📁 项目结构

```
website_prototype/
├── public/                 # 静态资源
│   ├── logo.jpg           # 公司Logo
│   ├── screens/           # 应用截图
│   └── video/             # 视频文件
├── src/
│   ├── components/        # React组件
│   │   ├── Header.tsx     # 导航栏
│   │   ├── Hero.tsx       # 首页横幅
│   │   ├── FeaturesSection.tsx  # 功能展示
│   │   ├── AppSection.tsx # 应用下载
│   │   ├── RobotSection.tsx # 机器人介绍
│   │   ├── InsuranceSection.tsx # 保险服务
│   │   ├── SocialProof.tsx # 用户评价
│   │   └── Footer.tsx     # 页脚
│   ├── App.tsx           # 主应用组件
│   ├── main.tsx          # 应用入口
│   └── index.css          # 全局样式
├── package.json          # 项目配置
├── vite.config.ts        # Vite配置
├── tailwind.config.js    # Tailwind配置
└── README.md            # 项目说明
```

## 🛠️ 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

## 🎨 设计特色

- **浅色主题** - 清爽的视觉体验
- **响应式设计** - 适配所有设备
- **流畅动画** - 提升用户体验
- **现代UI** - 简洁专业的设计风格

## 📱 主要功能

### 首页展示
- 公司Logo和导航
- 产品介绍视频
- 核心功能展示
- 应用下载引导

### 机器人服务 (MISSA-RA)
- 24/7路边援助
- 紧急充电服务
- 零件和设备租赁
- 智能配送系统

### 应用功能
- 智能路线规划
- AI安全支持
- 保险服务
- 防盗保护
- 电池健康监控
- 充电站地图

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 📝 自定义内容

### 替换Logo
将您的Logo文件放在 `public/logo.jpg`

### 更新应用截图
将截图放在 `public/screens/` 目录下：
- `app-1.png` - 主页面
- `app-2.png` - 功能页面  
- `app-3.png` - 设置页面

### 添加视频
将视频文件放在 `public/video/` 目录下：
- `robot-demo.mp4` - 机器人演示视频
- `promo.mp4` - 应用宣传视频

### 修改QR码链接
在 `src/components/AppSection.tsx` 中修改：
```typescript
const qrCodeUrl = 'https://your-app-url.com'
```

## 🌐 部署

### GitHub Pages
项目已配置自动部署到GitHub Pages：

1. 推送代码到GitHub
2. 在仓库设置中启用GitHub Pages
3. 选择 "GitHub Actions" 作为源
4. 每次推送都会自动部署

### 其他平台
```bash
# 构建
npm run build

# 部署dist/目录到任何静态托管服务
```

## 👥 团队协作

### 代码规范
- 使用TypeScript
- 遵循React最佳实践
- 使用Tailwind CSS类名
- 保持组件简洁

### 提交规范
```bash
git add .
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复bug"
git commit -m "style: 更新样式"
```

### 分支管理
- `main` - 生产环境
- `develop` - 开发环境
- `feature/*` - 功能分支

## 🐛 常见问题

### 端口被占用
```bash
# 杀死占用端口的进程
lsof -ti:5173 | xargs kill -9
```

### 依赖安装失败
```bash
# 清除缓存重新安装
rm -rf node_modules package-lock.json
npm install
```

### 样式不生效
```bash
# 重启开发服务器
npm run dev
```

## 📞 支持

如有问题，请联系开发团队或查看项目文档。

---

**WattUp Team** - 让骑行更智能，让生活更简单 🚴‍♂️✨