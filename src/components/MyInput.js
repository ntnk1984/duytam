import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {MyColor} from '../assets/colors';
import {Entypo} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
const MyInput = ({
  label,
  isPassword,
  placeholder,
  styleContainer,
  icon,
  iconRight,
  styleTextInput,
  isError,
  labelError,
  ...propsInput
}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={[styles.container, styleContainer]}>
      <Text>{label}</Text>
      <View
        style={[
          styles.textInputContainer,
          {
            borderColor: isFocused ? MyColor.primary : MyColor.greenLight,
          },
        ]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          {...propsInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isPassword ? isSecure : false}
          placeholder={placeholder}
          style={[styles.textInput, styleTextInput]}
        />
        {isPassword && (
          <View style={styles.icon}>
            <Entypo
              onPress={() => setIsSecure(!isSecure)}
              name={isSecure ? 'eye' : 'eye-with-line'}
              size={24}
              color="#888"
            />
          </View>
        )}
      </View>
      {isError && labelError && (
        <Animatable.View animation={'fadeInLeft'} duration={500}>
          <Text style={styles.textError}>{labelError}</Text>
        </Animatable.View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  textError: {
    marginTop: 7,
    fontSize: 12,
    color: '#ff1b1b',
  },
  icon: {
    marginRight: 8,
  },
  textInputContainer: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    paddingVertical: 12,
    borderColor: '#575DFB',
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  container: {},
});
export default MyInput;
