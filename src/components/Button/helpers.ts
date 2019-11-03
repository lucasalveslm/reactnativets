import {ViewStyle} from 'react-native';
import * as ButtonStyles from './styles';
import {buttonType} from './types';

export const getViewBaseStyle = (
  type: buttonType,
  outline: boolean,
): ViewStyle => {
  let base: object = {};
  switch (type) {
    case 'green':
      base = {...ButtonStyles.base, ...ButtonStyles.green};
    default:
      base = ButtonStyles.base;
  }
  return {...base, ...(outline ? ButtonStyles.outline : {})};
};

export const getTextBaseStyle = (
  type: buttonType,
  outline: boolean,
): object => {
  const viewBase = getViewBaseStyle(type, outline);

  return outline
    ? {...ButtonStyles.textBase, color: viewBase.borderColor}
    : ButtonStyles.textBase;
};
