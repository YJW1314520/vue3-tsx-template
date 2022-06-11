# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup
- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
## 配置eslint检查jsx,tsx文件
```
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "react",
],
```
## 模板目录结构
```
├── dist                                // 默认的 build 输出目录
├── public                              // vite项目下的静态目录
└── src                                 // 源码目录
    ├── api                             // 接口相关
    ├── assets                          // 公共的需要经过处理的文件（如image、css、font等）
    ├── components                      // 项目组件
    ├── directives                      // 自定义 指令
    ├── enums                           // 自定义 常量（枚举写法）
    ├── layout                          // 全局布局
    ├── router                          // 路由
    ├── store                           // 状态管理器
    ├── style                           // 全局样式
    ├── utils                           // 工具库
    ├── views                           // 页面模块目录
        ├── login                       // login页面模块
        ├── ...
    ├── App.tsx                         // vue顶层文件
    ├── main.ts                         // 项目入口文件
    ├── types                           // 项目type类型定义文件夹
├── .eslintrc                           // eslint配置文件
├── .gitignore                          // git忽略
├── index.html                          // 入口文件
├── LICENSE.md                          // LICENSE
├── package-lock.json                   // package-lock
├── package.json                        // package
├── README.md                           // README
├── tsconfig.json                       // typescript配置文件
└── vite.config.ts                      // vite
```