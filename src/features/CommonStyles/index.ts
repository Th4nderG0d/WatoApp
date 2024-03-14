import {StyleSheet} from 'react-native';

export const CommonStyles = () =>
  StyleSheet.create({
    headingText: {
      fontFamily: 'GT Super Txt Trial',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 26,
      color: '#fff',
      marginBottom: 16,
    },
    linkTextStyles: {
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'center',
      marginTop: 20,
    },
    infoText: {
      color: '#fff',
      fontSize: 12,
    },
    linkText: {
      color: '#D4FB54',
    },
    ORContainer: {
      alignItems: 'center',
      marginVertical: 24,
    },
    gglSignUpBtnStyles: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    gglSignUpBtnTextStyles: {
      color: '#fff',
    },
    inputContainer: {
      width: '100%',
      gap: 20,
    },
    btnContainer: {
      marginVertical: 24,
    },
    btnTextStyles: {
      color: 'black',
    },
  });
