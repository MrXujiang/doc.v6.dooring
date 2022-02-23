---
title: 工具推荐
nav:
  title: 工具推荐
  order: 4
---

## 工具推荐

> 推荐国内外优质, 实用项目 & 工具, 让技术更有价值!

```jsx
/**
 * inline: true
 */

import React from 'react';
import { Tabs, Alert } from 'antd';

const { TabPane } = Tabs;

const list = [
  {
    type: '图形&图像',
    icon: 'http://cdn.dooring.cn/dr/anyconv.png',
    text: '图片格式万能转换',
    link: 'https://anyconv.com/image-converter',
  },
  {
    type: '图形&图像',
    icon: '',
    iconText: 'WaterMark',
    text: '图片加水印',
    link: 'https://watermark-pro.vercel.app/',
  },
  {
    type: '图形&图像',
    icon: 'https://tinify.cn/images/example-shrunk.png',
    text: '图片万能压缩神器',
    link: 'https://tinify.cn/',
  },
  {
    type: '应用制作',
    icon: '',
    iconText: 'H5-Dooring',
    text: 'H5在线制作',
    link: 'http://h5.dooring.cn/h5_plus',
  },
  {
    type: '办公/网络',
    iconText: 'diagrams',
    text: '流程图在线制作',
    link: 'https://diagrams.freebusinessapps.net/diagrams',
  },
  {
    type: '媒体写作',
    icon: 'https://markdown.com.cn/editor/favicon.svg',
    text: 'MD在线编辑',
    link: 'https://markdown.com.cn/editor/',
  },
  {
    type: '图形&图像',
    icon: 'https://undraw.co/apple-touch-icon.png',
    text: 'SVG素材生成器',
    link: 'https://undraw.co/illustrations',
  },
  {
    type: '编程开发',
    icon: 'https://www.bccn.net/static/common/img/logo.gif',
    text: '在线编程工具',
    link: 'https://www.bccn.net/run/',
  },
];

export default () => {
  const types = Array.from(new Set(list.map((v) => v.type)));
  return (
    <div style={{ minHeight: '420px' }}>
      <Alert
        message="优秀的项目还可以获取《趣谈前端》公众号的推荐分享"
        type="success"
      />
      <Tabs centered>
        {types.map((v) => {
          return (
            <TabPane tab={<span>{v}</span>} key={v}>
              {list
                .filter((item) => item.type === v)
                .map((item) => {
                  return (
                    <React.Fragment key={item}>
                      <a
                        href={item.link}
                        target="_blank"
                        style={{
                          textAlign: 'center',
                          lineHeight: '30px',
                          display: 'inline-block',
                        }}
                      >
                        {item.icon ? (
                          <span
                            className="tool-card"
                            style={{
                              width: '180px',
                              height: '62px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '2px',
                              background: 'rgb(69, 105, 212)',
                              overflow: 'hidden',
                            }}
                          >
                            <img
                              src={item.icon}
                              style={{ width: '100%', height: '100%' }}
                            />
                          </span>
                        ) : (
                          <span
                            className="tool-card"
                            style={{
                              display: 'block',
                              background: 'rgb(69, 105, 212)',
                              color: '#fff',
                              fontSize: '26px',
                              fontWeight: 'bold',
                              width: '180px',
                              height: '62px',
                              textAlign: 'center',
                              padding: '16px',
                              borderRadius: '3px',
                            }}
                          >
                            {item.iconText}
                          </span>
                        )}

                        <p>{item.text || '欢迎自荐 & 推荐'}</p>
                      </a>
                    </React.Fragment>
                  );
                })}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
```

### 自荐 & 推荐项目

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="160px" style="margin-right:20px" />
<img src="http://cdn.dooring.cn/dr/lowcode.jpeg" width="160px" />
