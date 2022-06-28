# Vue 3 + tsx + Vite

这是一个基于Vue3+tsx+vite的项目模板

它内置了一些包。

## 配置vscode的eslint检查jsx,tsx文件
```
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "react",
],
```
## 项目依赖
```
依赖:
@vueuse/core 8.7.5
axios 0.27.2
element-plus 2.2.6
pinia 2.0.14
vue 3.2.37
vue-router 4.0.16

开发依赖:
@typescript-eslint/eslint-plugin 5.29.0  eslint-plugin-n 15.2.3
@typescript-eslint/parser 5.29.0         eslint-plugin-promise 6.0.0
@vitejs/plugin-vue 1.10.2                eslint-plugin-vue 9.1.1
@vitejs/plugin-vue-jsx 1.3.10            postcss 8.4.14
@vue/compiler-sfc 3.2.37                 tailwindcss 3.1.4
autoprefixer 10.4.7                      typescript 4.7.4
eslint 8.18.0                            vite 2.9.13
eslint-config-standard 17.0.0            vitepress 1.0.0-alpha.4
eslint-plugin-import 2.26.0              vue-tsc 0.2.3
```
## 模板目录结构
```
├── dist                                // 默认的build输出目录,放在server内部
├── server                              // 本项目的简易后端,nodejs搭建
    ├── dist                            // 即上文提到的打包结果
    ├── server.ts                       // 入口文件
    ├── README.md                       // README
    └── ...                             // 杂项
├── docs                                // vitepress
├── public                              // 静态资源目录
└── src                                 // 源码目录
    ├── api                             // 接口相关
    ├── assets                          // 公共资源,但需要经过处理(如image、css、font...)
    ├── components                      // 全局组件
    ├── directives                      // 自定义指令,不过tsx并不需要指令这种东西
    ├── enums                           // 自定义常量(枚举写法)
    ├── layout                          // 布局骨架
    ├── router                          // 路由
    ├── store                           // 状态管理器,vuex或pinia
    ├── style                           // 全局样式
    ├── utils                           // 工具库
    ├── views                           // 页面目录
        ├── login                       // login页面
        ├── home                        // home页面
        └── ...
    ├── App.tsx                         // vue顶层文件
    ├── index.css                       // tailwindcss样式
    ├── main.ts                         // 项目入口文件
    ├── types                           // 项目类型定义文件夹
├── .eslintrc                           // eslint配置文件
├── .gitignore                          // git忽略
├── index.html                          // 入口文件
├── LICENSE.md                          // LICENSE
├── pnpm-lock.yaml                      // pnpm版本的package-lock
├── package.json                        // package
├── README.md                           // README
├── tailwind.config.js                  // tailwindcss配置文件
├── postcss.config.js                   // postcss配置文件
├── tsconfig.json                       // typescript配置文件
└── vite.config.ts                      // vite
```
## 快速开始
拷贝本仓库,进入项目目录,在命令行运行`pnpm i`安装项目依赖(如果你没有pnpm请先使用`npm i -g pnpm`全局安装pnpm)
