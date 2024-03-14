import {Text, View} from 'react-native';
import React from 'react';
import {loginStyles} from './styles';
import InputComponent from '../../atoms/input';
import {Link} from '@react-navigation/native';
import ButtonComponent from '../../atoms/button';
import {GoogleIcon} from '../../assets';
import {CommonStyles} from '../CommonStyles';

const LoginComponent = () => {
  const styles = loginStyles();
  const commonStyles = CommonStyles();
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <Text style={commonStyles.headingText}>Please sign-in your account</Text>
      <View style={styles.secondaryContainer}>
        <View style={commonStyles.inputContainer}>
          <InputComponent placeholder={'Email'} />
          <InputComponent placeholder={'Password'} secureTextEntry />
        </View>
        <View style={styles.forgotTextContainer}>
          <Text style={[commonStyles.infoText, commonStyles.linkText]}>
            {'Forgot Password?'}
          </Text>
        </View>
        <View style={commonStyles.btnContainer}>
          <ButtonComponent style={styles.btnStyles} handlePress={handlePress}>
            <Text style={commonStyles.btnTextStyles}>{'Login'}</Text>
          </ButtonComponent>
        </View>
        <View style={commonStyles.linkTextStyles}>
          <Text style={commonStyles.infoText}>{'New to our platform?'}</Text>
          <Link
            to={'/SignUp'}
            style={[commonStyles.infoText, commonStyles.linkText]}>
            {'Create an account'}
          </Link>
        </View>

        <View style={commonStyles.ORContainer}>
          <Text style={commonStyles.infoText}>{'or'}</Text>
        </View>
        <ButtonComponent handlePress={handlePress}>
          <View style={commonStyles.gglSignUpBtnStyles}>
            <GoogleIcon />
            <Text style={commonStyles.gglSignUpBtnTextStyles}>
              {'Continue With Google'}
            </Text>
          </View>
        </ButtonComponent>
      </View>
    </View>
  );
};

export default LoginComponent;
