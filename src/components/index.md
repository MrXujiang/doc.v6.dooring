---
title: 基本介绍
nav:
  title: 低代码组件扩展
  order: 2
group:
  title: dooring组件扩展介绍
  path: /intro
  order: 1
---

## 基本介绍

Dooring 低代码租件扩展是专为 Dooring 等低代码平台设计的一套组件研发方式, 使用该规则设计组件可以轻松实现组件线上编辑功能,
并能一键植入到如[H5-Dooring](http://h5.dooring.cn/h5_plus), [V6.Dooring](http://v6.dooring.cn)等可视化平台.

如下是一个可实时编辑的组件, 我们可以编辑右侧的 json 属性来实时的更新组件:

```tsx
/**
 * title: Header仅供学习参考, 方便对低代码组件开发有更深入的理解
 */

import React from 'react';
import Editor from '@/Editor';
import Header from './basic/AHeader';
import C from './basic/AHeader/schema';

export default () => {
  const { config } = C;
  return (
    <Editor initValue={config}>
      {(config) => {
        return <Header {...config} />;
      }}
    </Editor>
  );
};
```

要想实现上面的实时编辑组件的功能, 我们在写组件代码的时候需要按照一种全新的方式编写, 对组件数据层进行抽离:

- index.tsx 组件代码
- index.less 样式文件
- schema.ts 组件的 schema 和属性映射
- index.md 组件文档

笔者设计了一个组件编辑器`Editor`, 只需要按照一定的规则将组件作为`Editor` 的 `Children` 传入即可:

```tsx | pure
import React from 'react';
import Editor from '@/Editor';
import Header from './';
import C from './schema';

export default () => {
  const { config } = C;
  return (
    <Editor initValue={config}>
      {(config) => {
        return <Header {...config} />;
      }}
    </Editor>
  );
};
```

同时我们写组件还是和原来写组件的方式一样, 但是低代码组件先天要求组件数据结构优先, 所以我们会在数据结构设计上下一定的功夫,
同时也能强制我们编写结构更清晰, 更可扩展, 可溯源的组件.

接下来我会对 `Dooring` 体系下的组件 `Schema` 进行详细的介绍, 方便大家更轻松的开发 `Dooring` 低代码组件.
