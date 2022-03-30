import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MyColor} from '../assets/colors';

const MyButton = ({styleContainer, styleText, title, ...propsButton}) => {
  return (
    <TouchableOpacity {...propsButton} style={[styles.button, styleContainer]}>
      <Text style={[styles.textButton, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: MyColor.primary,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default MyButton;
