/*
 * @Author: your name
 * @Date: 2022-02-23 11:03:18
 * @LastEditTime: 2022-02-23 11:36:03
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rc/doc.v6.dooring/.umirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Dooring可视化系列',
  mode: 'site',
  logo: 'http://cdn.dooring.cn/dr/qtqd_logo.png',
  exportStatic: {},
  outputPath: '../../dooring-bs/server/static/docz',
  base: '/docz/',
  publicPath: '/docz/',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es/components',
        style: false,
      },
    ],
  ],
  favicon: 'http://cdn.dooring.cn/dr/qtqd_logo.png',
  dynamicImport: {
    loading: '@/LoadingCp',
  },
  headScripts: [
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?517926916414c9f9eac1d2093dc7bedf";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
  ],
  manifest: {},
  hash: true,
});
