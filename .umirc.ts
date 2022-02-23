import { defineConfig } from 'dumi';

export default defineConfig({
  title: '趣谈前端',
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
