import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MyInput from '../components/MyInput';
import {AntDesign, MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import {MyColor} from '../assets/colors';
import MyButton from '../components/MyButton';
import axiosInstance from '../utils/axios';
const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const handleRegister = async () => {
    // register
    //....
    const data = {
      username: username,
      password: password,
      email: 'testzza@example.com',
      first_name: 'string',
      last_name: 'string',
    };
    const res = await axiosInstance.post('/auth/register', data);
    console.log(res);
    // navigation
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.navigation}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={28}
            color="black"
          />
        </View>
        <Text style={styles.textTitle}>Đăng ký</Text>
        <View style={styles.textSubContainer}>
          <Text style={styles.textSub}>Tạo mới một</Text>
          <Text style={styles.textPrimary}> tài khoản </Text>
          <Text style={styles.textSub}>để sử dụng hết </Text>
        </View>
        <Text style={styles.textSub}>các tính năng của chúng tôi</Text>
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
          placeholder="Ex: 079848xxx"
          label={'Mã khách hàng/ Số điện thoại'}
        />
        <MyInput
          value={password}
          onChangeText={value => setPassword(value)}
          icon={<Feather name="lock" size={20} color={MyColor.primary} />}
          placeholder={'.......'}
          styleContainer={styles.textInput}
          label={'Mật khẩu'}
          isPassword={true}
        />
        <MyInput
          value={rePassword}
          onChangeText={value => setRePassword(value)}
          icon={<Feather name="lock" size={20} color={MyColor.primary} />}
          placeholder={'.......'}
          styleContainer={styles.textInput}
          label={'Xác nhận mật khẩu'}
          isPassword={true}
        />
        <MyButton
          onPress={handleRegister}
          styleContainer={styles.button}
          title={'Đăng ký'}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  navigation: {
    marginRight: 'auto',
    marginBottom: 21,
  },
  button: {
    marginTop: 58,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 28,
  },
  sectionForm: {
    marginTop: 35,
  },
  textPrimary: {
    fontWeight: 'bold',
    fontSize: 16,
    color: MyColor.primary,
  },
  textSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  textSub: {
    fontSize: 16,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 34,
    color: MyColor.primary,
  },
  sectionHeader: {
    marginTop: 32,
  },
  container: {
    paddingHorizontal: 35,
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default RegisterScreen;
