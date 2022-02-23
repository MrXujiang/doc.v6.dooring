---
title: 快速上手
nav:
  title: 文档列表
  order: 2
group:
  path: /V6.Dooring
  title: V6.Dooring文档
  order: 1
---

<iframe src="//player.bilibili.com/player.html?aid=805252216&bvid=BV19y4y1G7b3&cid=403915052&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="420px"> </iframe>

## 环境准备

首先本地需要安装 node，并确保 node 版本是 10.13 或以上，（mac/win 下推荐使用 n 来管理 node 版本）

```bash
node -v
v14.9.0
```

<Badge>注：推荐使用 yarn 管理 npm 依赖</Badge>

## 工程目录

| v6.dooring/src   | v6.dooring/server                | v6.dooring/manage  |
| ---------------- | -------------------------------- | ------------------ |
| 可视化大屏编辑器 | 服务端（提供基础的数据演示服务） | 可视化大屏管理后台 |

本地拿到`私有授权源码`之后先安装对应依赖，在对应工程目录里执行 yarn 命令，等待依赖安装完成。

## 本地运行

1. 首先本地启动 server

2. 本地启动编辑器工程 / 管理后台

3. 在 server/src 目录的 index.js 中修改跨域白名单，改为本地编辑器工程 / 管理后台的 ip+端口，如http://192.167.0.3:8000

4. 在编辑器工程 / 管理后台项目的 src/utils/index.ts 文件中修改`SERVER_URL` 变量为本地服务器 ip+端口，如http://192.167.0.3:3000

## 项目路径说明

- /beta 可视化大屏编辑器项目

- /admin 可视化大屏管理后台

## 目录结构说明

1. 编辑器工程 v6.dooring/

2. 后台管理项目 v6.dooring/manage

3. 服务器数据支持 v6.dooring/server
