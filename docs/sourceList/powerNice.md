---
title: powerNice文档编辑器
nav:
  title: 文档列表
  order: 2
group:
  title: powerNice文档编辑器
  path: /powerNice
  order: 3
---

### 文章分享

> [powerNice 文档编辑介绍](https://mp.weixin.qq.com/s/D34OWAGUrcnfyhygOIMAQA) <br />[powerNice——轻量级且灵活方便的文档编辑工具](http://lowcode.dooring.cn/product/detail?fid=uhz2Trpslg) <br /> [github 地址](https://github.com/MrXujiang/powerNice) <br /> [在线访问](http://h5.dooring.cn/powernice)

源码权限请在 《趣谈前端》公众号内开通获取.

![](http://cdn.dooring.cn/dr/pow.png)

### 一. powerNice 目录介绍

下载源码之后, 我们可以看到基于 `umi` 创建的目录结构. 如果大家不熟悉 `umi` 可以在 [umi 文档](https://umijs.org/zh-CN/docs) 学习.

在源码目录里多了一个 `server` 目录, 这个主要是存放我们服务端代码的, 基本目录介绍如下:

- src(编辑器目录)
- umirc.ts (编辑器路由等配置文件, 具体可参考 umi)
- public (静态资源存放目录)
- server (服务端目录)
  - src (服务端源码目录)
    - config (全局配置)
    - lib (通用库)
    - router (路由)
    - service (业务层)
    - index.js 服务端入口文件
  - public (静态资源 / 数据存放目录)
    - db (数据存放目录)
      - list.json 存放用户列表

### 二. 技术栈和核心功能点

- 前端: Umi + React + Redux + Antd + React 插件集(文件操作, 富文本, markdown, pdf 导出, 图片截图等)
- 后端: Koa2 + Nodejs + jsonSchema + Nodejs 插件集(加密, 资源压缩, 文件处理, 请求库等)

核心功能点:

- 浏览器指纹识别机制实现
- 手动封装集成富文本 / markdown 编辑器
- 文章手一键导出为 pdf, 图片, md 文件, html 文件
- 文章预览模式实现
- 编辑器主题定制
- 文章内容复制等
- 服务器功能接口实现

### 三. 本地启动

首先需要确保我们已经安装了 `nodejs`, 其次在项目目录, 执行:

```bash
# 或 npm install
yarn
```

进入 `server` 目录, 安装服务端依赖:

```bash
# 或 npm install
yarn
```

启动编辑器:

```bash
yarn start
```

启动服务端:

```bash
cd server
yarn start
```

### 四. 学习方式

笔者推荐采用 引导式 + 探索式 的学习方式, 这样可以激励我们的独立思考和自主研究的能力, 我也会在视频中对文档编辑器做技术点的介绍, 欢迎大家在群里积极提问.
