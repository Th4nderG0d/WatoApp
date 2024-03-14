import {View, Text} from 'react-native';
import React from 'react';
import {signupStyles} from './styles';
import InputComponent from '../../atoms/input';
import ButtonComponent from '../../atoms/button';
import {Link} from '@react-navigation/native';
import {GoogleIcon} from '../../assets';
import {CommonStyles} from '../CommonStyles';
import CheckboxComponent from '../../atoms/checkbox';

const SignUpComponent = () => {
  const styles = signupStyles();
  const commonStyles = CommonStyles();
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <Text style={commonStyles.headingText}>Please sign-up your account</Text>
      <View style={styles.secondaryContainer}>
        <View style={commonStyles.inputContainer}>
          <InputComponent placeholder={'Name'} />
          <InputComponent placeholder={'Email'} />
          <InputComponent placeholder={'Password'} secureTextEntry />
        </View>
        <View style={styles.tcContainer}>
          <CheckboxComponent defaultValue={true} />
          <Text style={commonStyles.infoText}>{'I agree'}</Text>
          <Link
            to={'/SignUp'}
            style={[commonStyles.infoText, commonStyles.linkText]}>
            {'to privacy policy & terms'}
          </Link>
        </View>
        <View style={commonStyles.btnContainer}>
          <ButtonComponent style={styles.btnStyles} handlePress={handlePress}>
            <Text style={commonStyles.btnTextStyles}>{'Sign Up'}</Text>
          </ButtonComponent>
        </View>
        <View style={commonStyles.linkTextStyles}>
          <Text style={commonStyles.infoText}>
            {'Already have an account?'}
          </Text>
          <Link
            to={'/Login'}
            style={[commonStyles.infoText, commonStyles.linkText]}>
            {'Sign in instead'}
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

export default SignUpComponent;
