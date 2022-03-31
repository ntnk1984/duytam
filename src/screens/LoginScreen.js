import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MyInput from '../components/MyInput';
import {Entypo, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {MyColor} from '../assets/colors';
import {login} from '../user/UserService';
import axiosInstance from '../utils/axios';
import MyButton from '../components/MyButton';
const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handleLogin = async () => {
    // const res = await login(username, password);
    // const data = {
    //   username: username,
    //   password: password,
    // };
    // const res = await axiosInstance.post('/auth/login', data);
    // console.log('res', res);
    navigation.navigate('MainBottomTab');
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.textTitle}>Đăng nhập</Text>
        <Text style={styles.textSub}>
          Đăng nhập ngay bây giờ để{'\n'}kết nối với chúng tôi!
        </Text>
      </View>
      <View style={styles.sectionForm}>
        <MyInput
          value={username}
          onChangeText={value => setUsername(value)}
          icon={
            <MaterialCommunityIcons
              name="account"
              size={20}
              color={MyColor.primary}
            />
          }
          placeholder="Ex: 0798489xxx"
          label={'Mã khách hàng/ Số điện thoại'}
        />
        <MyInput
          value={password}
          onChangeText={value => setPassword(value)}
          icon={<Feather name="lock" size={20} color={MyColor.primary} />}
          styleContainer={styles.textInput}
          label={'Mật khẩu'}
          placeholder={'.......'}
          isPassword={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordNavigation')}>
          <Text style={styles.forgotText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <MyButton onPress={handleLogin} title={'Đăng nhập'} />
      </View>
      <View style={styles.sectionFooter}>
        <View style={styles.registerContainer}>
          <Text>Chưa có tài khoản?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.textRegister}> Đăng ký ngay!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textRegister: {
    fontWeight: 'bold',
    color: MyColor.primary,
  },
  registerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sectionFooter: {
    marginTop: 40,
  },
  forgotText: {
    marginTop: 6,
    textDecorationLine: 'underline',
    fontSize: 12,
    color: MyColor.primary,
  },
  textInput: {
    marginTop: 28,
  },
  sectionForm: {
    marginTop: 40,
  },
  textSub: {
    marginTop: 8,
    fontSize: 16,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 34,
    color: MyColor.primary,
  },
  sectionHeader: {
    marginTop: 75,
  },
  container: {
    paddingHorizontal: 35,
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default LoginScreen;
