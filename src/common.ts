import { ITextConfigType, TTextDefaultType } from './types';
import 'antd-mobile/es/global';

///提取所有公用设置，传来时加到这里，约定公用类型
//公用配置需满足条件，所有组件初始值统一，否则不放公用设置

export interface ICommonBaseType {
  cpName: TTextDefaultType;
  id: string;
}

export const baseConfig: ITextConfigType[] = [
  {
    key: 'cpName',
    name: '组件名称',
    type: 'Text',
  },
];

export const baseDefault = {
  cpName: '',
  id: '',
};
