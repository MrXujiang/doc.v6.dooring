---
title: schema设计
nav:
  title: 低代码组件扩展
  order: 2
group:
  title: dooring组件扩展介绍
  path: /intro
  order: 2
---

## Dooring 可编辑组件 Schema 设计

Schema 分两部分:

- editData 组件可编辑属性的数组
- config 组件真正消费的数据

### editData 详解

`editData` 是 组件属性可编辑项的数组, 每一项里面包含了如下字段:

- key 属性名
- name: 属性名的中文显示
- type: 属性的可编辑类型
- isCrop(可选)
- cropRate(可选)
- range(type 为'Radio'或'Select'时的选项数组)
- 后期可能会扩展(详细结构可参考[Dooring 开源版本](https://github.com/MrXujiang/h5-Dooring))

`key`和`name` 都可以按照组件属性的语义来定, 这里值得一提的是 `type`. 不同属性的值类型不同, 所以我们编辑项的 `type` 也不同, 所有的类型如下:

- Upload 上传组件
- Text 文本框
- RichText 富文本
- TextArea 多行文本
- Number 数字输入框
- DataList 列表编辑器
- FileList 文件列表编辑器
- InteractionData 交互设置
- Color 颜色面板
- MutiText 多文本
- Select 选择下拉框
- Radio 单选框
- Switch 开关切换
- CardPicker 卡片面板
- Table 表格编辑器
- Pos 坐标编辑器
- FormItems 表单设计器

更详细的介绍可以访问 [dooring 开发文档](http://h5.dooring.cn/doc)

### config 详解

`config` 本质上是一个对象, 也就是组件所能暴露出来的属性集合, 和 `editData` 数组每一项的`key` 一致, 如下:

```js
{
    cpName: 'Header',
    logoText: '',
    fontSize: 20,
    color: 'rgba(47,84,235,1)',
    height: 60,
    fixTop: false,
    menuList: [
      {
        id: '1',
        title: '首页',
        link: '/'
      },
      {
        id: '2',
        title: '产品介绍',
        link: '/'
      },
    ]
  }
```
