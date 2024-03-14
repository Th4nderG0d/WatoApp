import {StyleSheet} from 'react-native';

export const buttonStyles = () => {
  return StyleSheet.create({
    buttonStyles: {
      borderRadius: 10,
      borderWidth: 1,
      height: 48,
      width: '100%',
      backgroundColor: '#141517',
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: '#fff',
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
    },
  });
};
