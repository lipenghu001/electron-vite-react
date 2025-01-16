# 桌面应用项目开发模版

## 概述
📦 开箱即用  
🎯 基于官方的 [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), 低侵入性  
🌱 结构清晰，可塑性强  
💪 支持在渲染进程中使用 Electron、Node.js API  
🔩 支持 C/C++ 模块  
🖥 很容易实现多窗口 
已配置好调试模式

## 快速开始

```sh
# clone the project
git clone https://github.com/lipenghu001/electron-vite-react.git

# enter the project directory
cd electron-vite-react

# install dependency
# npm install
nvm use 18
export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
npm install --registry=https://registry.npmmirror.com --save-prod

# develop
npm run dev

# prod
npm run build:mac
npm run build:win

# release
npm run release
```

## github actions 自动化构建发版
1. 修改package.json中的版本号 a.b.c
2. git add.    git commit -m "xxxx"
3. git tag va.b.c
4. git push origin va.b.c

## 调试
VSCode调试模式，启动 “Debug App”,可同时调试主进程与渲染进程


## 问题
- Mac版，未签名的版本如果无法运行，需要本地执行
xattr -cr /Applications/ElectronViteReact.app

## 待处理
- electron版本太高，不支持window7。但降级的话又无法支持高级语法，报ES modules等错误