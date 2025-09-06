# 🔧 GitHub Pages 故障排除指南

## ❌ 常见错误解决方案

### 错误1: "Get Pages site failed"
```
Error: Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions
```

#### 解决方案：
1. **检查GitHub Pages设置**：
   - 进入仓库 → Settings → Pages
   - Source选择 `GitHub Actions`
   - 点击 Save

2. **检查Actions权限**：
   - 进入仓库 → Settings → Actions → General
   - 确保 "Workflow permissions" 设置为 "Read and write permissions"
   - 勾选 "Allow GitHub Actions to create and approve pull requests"

3. **手动触发部署**：
   - 进入仓库 → Actions 标签
   - 点击 "Deploy to GitHub Pages" 工作流
   - 点击 "Run workflow" 按钮

### 错误2: "HttpError: Not Found"
这通常表示GitHub Pages还没有被正确初始化。

#### 解决方案：
1. **等待几分钟**：GitHub Pages需要时间初始化
2. **检查仓库设置**：确保仓库是Public的
3. **重新配置Pages**：
   - Settings → Pages → 删除当前配置
   - 重新选择 "GitHub Actions"
   - 保存设置

### 错误3: 网站无法访问
#### 解决方案：
1. **检查URL格式**：`https://tianluoboding.github.io/website_prototype/`
2. **等待部署完成**：通常需要2-5分钟
3. **清除浏览器缓存**
4. **尝试无痕模式**

## ✅ 完整设置检查清单

### 📋 GitHub仓库设置
- [ ] 仓库是Public的
- [ ] 仓库名称是 `website_prototype`
- [ ] 代码已推送到main分支

### 📋 GitHub Pages设置
- [ ] Settings → Pages → Source选择 "GitHub Actions"
- [ ] 保存设置

### 📋 Actions权限设置
- [ ] Settings → Actions → General
- [ ] Workflow permissions: "Read and write permissions"
- [ ] 勾选 "Allow GitHub Actions to create and approve pull requests"

### 📋 部署状态检查
- [ ] Actions标签页显示部署成功
- [ ] 没有红色错误信息
- [ ] 部署状态为绿色✅

## 🚀 手动触发部署

如果自动部署失败，可以手动触发：

1. **进入Actions标签页**
2. **找到 "Deploy to GitHub Pages" 工作流**
3. **点击 "Run workflow"**
4. **选择main分支**
5. **点击 "Run workflow" 按钮**

## 📞 如果问题仍然存在

### 方案1: 重新创建仓库
1. 删除当前仓库
2. 重新创建仓库
3. 重新推送代码

### 方案2: 使用其他部署平台
- **Netlify**: 拖拽dist文件夹
- **Vercel**: 连接GitHub仓库
- **Firebase Hosting**: 使用Firebase CLI

### 方案3: 联系GitHub支持
- 访问GitHub Support
- 描述具体错误信息
- 提供仓库链接

## 🎯 成功标志

当一切正常时，您应该看到：
- ✅ Actions显示绿色部署状态
- ✅ 网站可以正常访问
- ✅ 所有功能正常工作

---

**记住：GitHub Pages需要几分钟时间来初始化和部署！** ⏰
