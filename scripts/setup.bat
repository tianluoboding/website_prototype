@echo off
REM WattUp Website Setup Script for Windows
REM 自动设置开发环境

echo 🚀 正在设置WattUp网站开发环境...

REM 检查Node.js版本
echo 📋 检查Node.js版本...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 请先安装Node.js (版本16+)
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node -v') do echo ✅ Node.js版本: %%i
)

REM 检查npm
echo 📋 检查npm...
npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm未安装
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm -v') do echo ✅ npm版本: %%i
)

REM 安装依赖
echo 📦 安装项目依赖...
npm install
if %errorlevel% neq 0 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
) else (
    echo ✅ 依赖安装成功
)

REM 检查端口
echo 🔍 检查端口5173...
netstat -an | find "5173" >nul
if %errorlevel% equ 0 (
    echo ⚠️  端口5173已被占用，请手动关闭相关进程
)

REM 启动开发服务器
echo 🌟 启动开发服务器...
echo 📱 网站地址: http://localhost:5173/website_prototype/
echo 🛑 按 Ctrl+C 停止服务器
echo.

npm run dev
