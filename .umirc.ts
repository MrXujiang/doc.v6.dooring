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
  outputPath: '../../dooring-bs/server/static/blog',
  base: '/blog/',
  publicPath: '/blog/',
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
  ],
  favicon: 'http://cdn.dooring.cn/dr/qtqd_logo.png',
  dynamicImport: {
    loading: '@/LoadingCp',
  },
  manifest: {},
  hash: true,
});
