import {StyleSheet} from 'react-native';

export const signupStyles = () =>
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
      padding: 16,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    btnStyles: {
      borderColor: 'none',
      backgroundColor: '#D4FB54',
    },
    tcContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginVertical: 20,
    },
  });
