import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export type ButtonProps = {
  children: ReactNode;
  handlePress: () => void;
  style?: ViewStyle | TextStyle;
};
