import {View, Text} from 'react-native';
import React from 'react';
import {HomeStyles} from './styles';
import {Logo} from '../../assets';
import ButtonComponent from '../../atoms/button';
import {Link} from '@react-navigation/native';
import {CommonStyles} from '../CommonStyles';

const HomeComponent = () => {
  const styles = HomeStyles();
  const commonStyles = CommonStyles();
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.headingTextStyle}>
        {'Zero Cost\nWhatsApp Messaging\nplatform'}
      </Text>
      <ButtonComponent handlePress={handlePress}>
        <Text>{'Get Started'}</Text>
      </ButtonComponent>
      <View style={commonStyles.linkTextStyles}>
        <Text style={commonStyles.infoText}>{'Already have an account?'}</Text>
        <Link
          to={'/Login'}
          style={[commonStyles.infoText, commonStyles.linkText]}>
          {'Sign in instead'}
        </Link>
      </View>
    </View>
  );
};

export default HomeComponent;
