---
title: H5-Dooring问题答疑
nav:
  title: 项目答疑
  order: 5
group:
  path: /
  order: 1
---

## H5-Dooring 私有化版本如何本地运行, 部署?

> H5-Dooring 是一款功能强大，高可扩展的 H5 可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的 H5 落地页最佳实践。

目前最新版 H5-Dooring 架构分为 4 层:

- **editor** H5 编辑器端
- **h5** H5 页面渲染基座
- **admin** H5-dooring 的管理后台
- **server** 基础服务端(商用建议替换成公司自己的后台, server 端主要提供数据支持服务)

### 本地开发, 调试

由于技术栈采用的 `React` 和 `Nodejs`, 所以可以采用 `react` 开发最常用的方式.

node 版本建议在 `14.15.4`.

#### 1. 调试 `editor` 项目

在获取私有化版本代码后, 需要进入 `editor` 项目中, 执行 `yarn` 或者 `npm install` 来安装本地依赖.

同时, 进入 `server`, 执行 `yarn` 或者 `npm install` 来安装服务端相关依赖.

依赖安装完之后就可以启动项目了, 分别启动 `editor` 和 `server` 项目:

```bash
# editor
yarn start

# server
yarn start
```

由于启动了两个服务项目, 所以我们需要解决跨域问题. 对于 `editor`, 我们在 `src/utils/tool.ts` 中 47 行 `serverUrl` 变量开发环境的 ip 改成 `server` 工程的 `ip` (这个 ip 会在终端控制台打印,直接复制即可)

对于 `server` 工程, 我们同样需要给 `editor` 工程开 `ip` 白名单, 来实现跨域, `editor` 的 `ip` 同样可以在终端控制台打印出来:

![](http://cdn.dooring.cn/dr/door-editor.png)

在 `server/src/index.js` 搜索 `whiteList` 变量, 然后添加 `editor` 的 `ip`, 即可实现跨域. 这个时候就完成了本地客户端 / 服务端环境的配置, 可以轻松的修改 `editor` 工程的代码了. 有关更详细的技术开发可以参考文档: [H5-Dooring 技术文档](http://h5.dooring.cn/doc/zh/guide/product.html)

#### 2. 调试 `admin` 项目

调试 `admin` 和 `editor` 的方式基本一致, 可以参考上面的本地环境教程. 这里特别注意一下 `server` 端的数据存储.

`server` 端主要提供基本的数据支持, 数据文件放在 `server/public/db` 下. 具体介绍:

- h5 存放所有 h5 页面数据
- h5_monitor 暂时不用关注
- h5_tpl 存放 h5 公共模版
- h5_vip 存放用户数据和表单数据
  - vip.json 存放用户数据, 本地调试超级管理员账号 用户名: `super` 密码: `super_123`
  - view.json 网站访问量
  - form 用户通过 h5 的表单收集的表单数据
- city.json 全国省市级联数据
- image.json 图片库的空数据文件

#### 3. 关于 editor 和 h5 工程的同步关系

`h5` 工程主要用来渲染 H5 页面, 如果 `editor` 工程的 `src/components/BasicShop` 发生变化(也就是组件新增), 需要同步一份到 `h5/src/compoents/BasicShop` 中, 在发布前需要同时打包 `editor` 和 `h5` 工程到 `server/static` 下.

#### 4. 打包部署相关

如果`editor` 或者 `h5` 或者 `admin` 项目有更新, 需要执行:

```bash
yarn build
```

将项目打包到 `server/static` 中(执行 yarn
build 会自动把项目打包到 server/static 中,所以这个不用关心), 之后将打包后的如`editor` 上传到服务器对应的 `server/static` 即可. 服务器上只需要部署 `server` 工程.

这里以 `centos` 服务器为例, 需要全局安装 nodejs(建议再全局安装一下 yarn
), pm2(用来做负载均衡), 如果你的服务端采用的非 nodejs 服务器, 可以按照相关的服务器说明配置.

同时在上传服务器文件之前, 你可能需要配置自定义的 ip 或者域名, 这时需要在`server/src/config` 的 serverPort 和 staticPath 配置对应的端口和域名:

- serverPort 服务器端口号, 默认 80
- staticPath 服务器域名, 线上环境可以在 `isDev` 的右侧配置自定义域名,如`http://h5.dooring.cn`
