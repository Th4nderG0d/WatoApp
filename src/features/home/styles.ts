import {StyleSheet} from 'react-native';

export const HomeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black',
      padding: 16,
    },

    headingTextStyle: {
      fontFamily: 'GT Super Txt Trial',
      fontSize: 28,
      fontWeight: '400',
      lineHeight: 42,
      letterSpacing: 0,
      textAlign: 'left',
      color: '#fff',
      marginTop: 24,
      marginBottom: 64,
    },
  });
