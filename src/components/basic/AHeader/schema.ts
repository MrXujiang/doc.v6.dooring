import {
  IColorConfigType,
  INumberConfigType,
  ITextConfigType,
  IUploadConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TTextDefaultType,
  TUploadDefaultType,
  ISwitchConfigType,
  TSwitchDefaultType,
  IDataListConfigType,
  TDataListDefaultType,
} from '@/types';
import { ICommonBaseType, baseConfig, baseDefault } from '@/common';

export type HeaderFixedKeyType = 0 | 1;

export type THeaderEditData = Array<
  | IColorConfigType
  | INumberConfigType
  | IUploadConfigType
  | ITextConfigType
  | ISwitchConfigType
  | IDataListConfigType
>;

export interface IHeaderConfig extends ICommonBaseType {
  bgColor: TColorDefaultType;
  logo: TUploadDefaultType;
  logoText: TTextDefaultType;
  fontSize: TNumberDefaultType;
  color: TColorDefaultType;
  height: TNumberDefaultType;
  fixTop: TSwitchDefaultType;
  showMenuBtn: TSwitchDefaultType;
  menuColor: TColorDefaultType;
  menuList: TDataListDefaultType;
  menuBgColor: TColorDefaultType;
}

export interface IHeaderSchema {
  editData: THeaderEditData;
  config: IHeaderConfig;
}

const Header: IHeaderSchema = {
  editData: [
    ...baseConfig,
    {
      key: 'bgColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'height',
      name: '高度',
      type: 'Number',
    },
    {
      key: 'logo',
      name: 'logo',
      type: 'Upload',
      isCrop: false,
      cropRate: 1000 / 618,
    },
    {
      key: 'logoText',
      name: 'logo文字',
      type: 'Text',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    },
    {
      key: 'fixTop',
      name: '固定顶部',
      type: 'Switch',
    },
    {
      key: 'showMenuBtn',
      name: '显示菜单按钮',
      type: 'Switch',
    },
    {
      key: 'menuColor',
      name: '菜单按钮颜色',
      type: 'Color',
    },
    {
      key: 'menuList',
      name: '菜单列表',
      type: 'DataList',
    },
    {
      key: 'menuBgColor',
      name: '菜单背景颜色',
      type: 'Color',
    },
  ],
  config: {
    ...baseDefault,
    cpName: 'Header',
    bgColor: 'rgba(17,57,227,100)',
    logo: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'http://cdn.dooring.cn/dr/logo.ff7fc6bb.png',
      },
    ],
    logoText: '',
    fontSize: 20,
    color: 'rgba(47,84,235,1)',
    height: 60,
    fixTop: false,
    showMenuBtn: false,
    menuColor: 'rgba(47,84,235,1)',
    menuList: [
      {
        id: '1',
        title: '首页',
        link: '/',
      },
      {
        id: '2',
        title: '产品介绍',
        link: '/',
      },
    ],
    menuBgColor: 'rgba(8,22,216,1)',
  },
};

export default Header;
