import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {inputStyles} from './styles';
import {inputPropsType} from './types';
import {PasswordIcon} from '../../assets';

const InputComponent = ({
  placeholder,
  secureTextEntry = false,
}: inputPropsType) => {
  const styles = inputStyles();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !showPassword}
        placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <PasswordIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputComponent;
