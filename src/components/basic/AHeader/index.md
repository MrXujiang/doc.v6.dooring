---
title: 头部组件
nav:
  title: 低代码组件扩展
  order: 2
group:
  title: 基础组件
  path: /basic
  order: 3
---

### 基本使用:

```tsx
/**
 * title: Header仅供学习参考, 方便对低代码组件开发有更深入的理解
 */

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
