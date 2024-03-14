import {StyleSheet} from 'react-native';

export const loginStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black',
      padding: 16,
      gap: 10,
    },
    secondaryContainer: {
      justifyContent: 'center',
      backgroundColor: '#27272A',
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 10,
    },
    forgotTextContainer: {
      alignItems: 'flex-end',
      marginVertical: 20,
    },
    btnStyles: {
      backgroundColor: '#D4FB54',
      borderColor: 'none',
    },
  });
