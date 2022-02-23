---
title: 作者简介
nav:
  title: 作者简介
---

## 作者简介

> 徐小夕（笔名），5 年+前端工作经验，先后服务过多家上市公司，独角兽企业，做过前端负责人，架构师。热爱技术，开源，写作，`知乎专栏作家`，`掘金签约作者`，`HelloWorld社区创始人之一`，`LowCode可视化社区创始人`, `H5-Dooring 框架作者`。 同时感谢一路走来一起做开源的[小伙伴们](https://github.com/H5-Dooring/dooringx)，持续共建!

- [公众号 《趣谈前端》](http://cdn.dooring.cn/dr/qtqd_code.png)
- [视频号 《趣谈前端》](http://cdn.dooring.cn/dr/vc.jpeg)《小夕说》
- [知乎(2.6w+粉丝)](https://www.zhihu.com/people/build800)
- [掘金(1.7w+粉丝)](https://juejin.cn/user/3808363978429613)
- [B 站(1600+粉丝)]()
- [Github(8.1k+ star)](https://github.com/MrXujiang)

### 技术栈

熟悉`Vue`，`React`，`Jquery`，`Angular`，`Nodejs` 等前端技术，并对原生 `javascript` 框架设计有一定研究，熟悉 Css3 各种黑科技，目前致力于前端工程化，
可视化方向的研究。

开源 & 产品：

- [H5-Dooring | 让 H5 制作像搭积木一样简单](https://github.com/MrXujiang/h5-Dooring)
- [dooring-electron | dooring 桌面端软件](https://github.com/MrXujiang/dooring-electron-lowcode)
- [V6.Dooring | 数据可视化大屏搭建引擎](http://v6.dooring.cn/beta)
- [DooringX | 一款开箱即用的可视化搭建框架](https://github.com/H5-Dooring/dooringx)
- [mitu-editor | 轻量级且可扩展的图片/图形编辑器解决方案](https://github.com/H5-Dooring/mitu-editor)
- [LowCode 可视化社区 | 分享国内外低代码可视化最佳实践](http://lowcode.dooring.cn)
- [react-slider-vertify | 基于 react 实现的轻量级滑动验证码组件](https://github.com/MrXujiang/react-slider-vertify)
- [react-loading | 轻量级加载动画库, 支持按需导入](http://h5.dooring.cn/react-loading)
- [xijs | 一款面向业务场景的开箱即用的 js 工具库](https://github.com/MrXujiang/xijs)

### 项目经历

参与过用户量 3 亿+的 app 开发，千万级内容平台搭建，企业 Saas 系统设计开发和数据中台整体架构和引擎设计，企业业务组件库搭建和微前端实践。

### 兴趣爱好

热爱开源，读书，旅游，健身，产品设计和社交，传播优秀技术思想。

### 打卡地

新疆（库尔勒，乌鲁木齐），北京，武汉，长沙，深圳，杭州，苏州，南京。

### 实战训练营

```jsx
/**
 * inline: true
 */

import React from 'react';
import { Carousel } from 'antd';

export default () => {
  const contentStyle = {
    maxHeight: '360px',
    color: '#fff',
    display: 'block',
    textAlign: 'center',
    overflow: 'hidden',
    border: '1px solid #06c',
  };
  return (
    <Carousel autoplay>
      <div>
        <a
          style={contentStyle}
          href="http://mp.weixin.qq.com/mp/homepage?__biz=MzU2Mzk1NzkwOA==&hid=9&sn=b47e7de53b9c9f162608f4a58c01b650&scene=18#wechat_redirect"
          target="_blank"
        >
          <img
            style={{ width: '100%' }}
            src="http://cdn.dooring.cn/dr/qt.png"
          />
        </a>
      </div>
      <div>
        <a
          style={contentStyle}
          href="http://lowcode.dooring.cn/"
          target="_blank"
        >
          <img
            style={{ width: '100%' }}
            src="http://cdn.dooring.cn/dr/ll.png"
          />
        </a>
      </div>
    </Carousel>
  );
};
```

### 电子书分享<Badge>建议使用谷歌浏览器查看</Badge>

```jsx
/**
 * inline: true
 */

import React from 'react';
import { Timeline, Tag } from 'antd';
export default () => {
  const list = [
    {
      n: '《Nodejs实战》',
      l: 'http://cdn.dooring.cn/dr/Node.js%E5%AE%9E%E6%88%98%20%E4%B8%AD%E6%96%87%E7%89%88.pdf',
    },
    {
      n: '《Javascript设计模式与开发实战》',
      l: 'http://cdn.dooring.cn/dr/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5.pdf',
    },
    {
      n: '《ES6核心语法详解》',
      l: 'http://cdn.dooring.cn/dr/%E8%B6%A3%E8%B0%88%E5%89%8D%E7%AB%AF%20%E4%B8%80%E6%96%87%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%20es6%2B%E6%96%B0%E7%89%B9%E6%80%A7%E5%8F%8A%E6%A0%B8%E5%BF%83%E8%AF%AD%E6%B3%95.pdf',
    },
    {
      n: '《响应式Web设计+HTML5和CSS3实战》',
      l: 'http://cdn.dooring.cn/dr/%E5%93%8D%E5%BA%94%E5%BC%8FWeb%E8%AE%BE%E8%AE%A1%2BHTML5%E5%92%8CCSS3%E5%AE%9E%E6%88%98%2B%E7%AC%AC2%E7%89%88.pdf',
    },
    {
      n: '《怦然心动：情感化交互设计指南》',
      l: 'http://cdn.dooring.cn/dr/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%EF%BC%9A%E6%83%85%E6%84%9F%E5%8C%96%E4%BA%A4%E4%BA%92%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97%EF%BC%88%E7%BE%8E%EF%BC%89Stephen%20P.Anderson.pdf',
    },
    {
      n: '《网络是怎样连接的》',
      l: 'http://cdn.dooring.cn/dr/%E7%BD%91%E7%BB%9C%E6%98%AF%E6%80%8E%E6%A0%B7%E8%BF%9E%E6%8E%A5%E7%9A%84_%E6%88%B7%E6%A0%B9%E5%8B%A4.pdf',
    },
    {
      n: `《不要让我思考Don't Make Me Think》`,
      l: 'http://cdn.dooring.cn/dr/%E3%80%8A%E4%B8%8D%E8%A6%81%E8%AE%A9%E6%88%91%E6%80%9D%E8%80%83Don%27t%20Make%20Me%20Think%E3%80%8B-%E5%85%8B%E9%B2%81%E6%A0%BC.pdf',
    },
    {
      n: '《金字塔原理》',
      l: 'http://cdn.dooring.cn/dr/%E9%87%91%E5%AD%97%E5%A1%94%E5%8E%9F%E7%90%86.pdf',
    },
    {
      n: '《编写高质量代码：Web前端开发修炼之道》',
      l: 'http://cdn.dooring.cn/dr/%E7%BC%96%E5%86%99%E9%AB%98%E8%B4%A8%E9%87%8F%E4%BB%A3%E7%A0%81%EF%BC%9AWeb%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E4%BF%AE%E7%82%BC%E4%B9%8B%E9%81%931.pdf',
    },
    {
      n: '《简约至上：交互设计四策略》',
      l: 'http://cdn.dooring.cn/dr/%E7%AE%80%E7%BA%A6%E8%87%B3%E4%B8%8A%EF%BC%9A%E4%BA%A4%E4%BA%92%E8%AE%BE%E8%AE%A1%E5%9B%9B%E7%AD%96%E7%95%A5.pdf',
    },
  ];

  const clickNode = (l) => {
    window.open(l);
  };
  return (
    <>
      {list.map((v, i) => (
        <div
          style={{
            display: 'inline-block',
            marginBottom: '16px',
            marginRight: '12px',
            cursor: 'pointer',
          }}
        >
          <Tag onClick={() => clickNode(v.l)} color="processing" key={i}>
            {v.n}
          </Tag>
        </div>
      ))}
    </>
  );
};
```

### 联系 & 合作

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="160px" style="margin-right:20px" />
<img src="http://cdn.dooring.cn/dr/lowcode.jpeg" width="160px" />
