import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {checkBoxStyles} from './styles';
import {checkboxPropsType} from './types';
import {CheckMarkImage} from '../../assets';

const CheckboxComponent = ({label, defaultValue}: checkboxPropsType) => {
  const styles = checkBoxStyles();
  const [isChecked, setisChecked] = useState(defaultValue);
  const toggleCheckbox = () => {
    setisChecked(!isChecked);
  };

  return (
    <Pressable onPress={toggleCheckbox} style={styles.container}>
      {isChecked ? (
        <CheckMarkImage width={20} height={20} />
      ) : (
        <View style={[styles.checkbox]} />
      )}
      {label && <Text>{label}</Text>}
    </Pressable>
  );
};

export default CheckboxComponent;
