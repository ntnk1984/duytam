import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {MyColor} from '../assets/colors';
import {Entypo} from '@expo/vector-icons';
const MyInput = ({
  label,
  isPassword,
  placeholder,
  styleContainer,
  icon,
  iconRight,
  styleTextInput,
  ...propsInput
}) => {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View style={[styles.container, styleContainer]}>
      <Text>{label}</Text>
      <View style={[styles.textInputContainer, {borderColor: MyColor.primary}]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          {...propsInput}
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
    </View>
  );
};
const styles = StyleSheet.create({
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
  },
  container: {},
});
export default MyInput;
