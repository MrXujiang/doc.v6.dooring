---
title: Css库
nav:
  title: 开源广场
  order: 2
group:
  path: /frontend
  title: 前端优质开源库
  order: 1
---

# 开源广场

<Alert type="info">
  整理一些常用且使实用的开源项目, 方便大家更高效的学习和工作.
</Alert>

## Css 相关库

1. [hover.css](http://ianlunn.github.io/Hover/#effects) 开箱即用的鼠标悬停动画
2. [animate.css](https://github.com/animate-css/animate.css/) 一个跨浏览器的简单便捷的 CSS 动画库
3. [Magic](https://github.com/miniMAC/magic) 集成各种特殊动效的 css 动画库
4. [kite](https://hiloki.github.io/kitecss/) 一个兼容性极好且灵活的布局 css 库
5. [csshake](http://elrumordelaluz.github.io/csshake/) 一个能够震动和晃动`DOM`元素的 CSSku 库
6. [hint.css](https://kushagra.dev/lab/hint/) 一个用纯 css 和 html 实现的提示库

以上这些库不必每一样都去了解和深究, 技术都是为业务服务的, 所以我们按需使用和学习即可. 至于像 react 或者 vue 这种框架的相关生态, 笔者这里就不一一介绍了, 官网文档上都有非常详细的生态集, 感兴趣的朋友自行了解即可.

```jsx
/**
 * inline: true
 */

import React from 'react';
import { Button } from 'antd';

export default () => (
  <Button
    type="primary"
    onClick={() => window.open('http://cdn.dooring.cn/dr/lowcode.jpeg')}
  >
    + 我要补充
  </Button>
);
```
