import {Pressable, Text} from 'react-native';
import React from 'react';
import {ButtonProps} from './types';
import {buttonStyles} from './styles';

const ButtonComponent = ({handlePress, style, children}: ButtonProps) => {
  const styles = buttonStyles();

  return (
    <Pressable
      onPress={handlePress}
      style={({pressed}) => [
        styles.buttonStyles,
        style,
        {opacity: pressed ? 0.7 : 1},
      ]}>
      <Text style={styles.textStyle}>{children}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
