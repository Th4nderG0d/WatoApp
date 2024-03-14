import {StyleSheet} from 'react-native';

export const inputStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 48,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 10,
      paddingLeft: 8,
      paddingRight: 16,
    },
    input: {
      flex: 1,
      color: '#fff',
    },
  });
