import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderAuth from '../../components/authUser/HeaderAuth';
import MyInput from '../../components/MyInput';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MyColor} from '../../assets/colors';
import MyButton from '../../components/MyButton';

const ForgotPasswordEnterCodeScreen = ({navigation}) => {
  const [codeInput, setCodeInput] = useState('');
  const handleCommit = () => {
    navigation.navigate('ForgotPasswordNewPassword');
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <HeaderAuth title={'Quên Mật Khẩu?'} navigation={navigation} />
        <Text style={styles.textSub}>
          Chúng tôi đã gửi một tin nhắn về số điện thoại của bạn cùng với mã xác
          thực
        </Text>
      </View>
      <View style={styles.sectionForm}>
        <MyInput
          value={codeInput}
          onChangeText={value => setCodeInput(value)}
          keyboardType="numeric"
          styleTextInput={styles.input}
          maxLength={6}
          label={'Mã xác thực'}
          placeholder={'Ex: 123456'}
        />
        <Text style={styles.textRePass}>Gửi lại mã xác nhận (10s)</Text>
        <MyButton onPress={handleCommit} title={'Xác thực'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textRePass: {
    marginTop: 7,
    color: MyColor.primary,
  },
  input: {
    textAlign: 'center',
    color: '#000',
  },
  textSub: {
    fontSize: 16,
  },
  sectionHeader: {
    marginBottom: 55,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 35,
  },
});
export default ForgotPasswordEnterCodeScreen;
