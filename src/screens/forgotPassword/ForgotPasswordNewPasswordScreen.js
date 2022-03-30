import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderAuth from '../../components/authUser/HeaderAuth';
import MyInput from '../../components/MyInput';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {MyColor} from '../../assets/colors';
import MyButton from '../../components/MyButton';

const ForgotPasswordNewPasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const handleChangePassword = () => {
    navigation.navigate('MainBottomTab');
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <HeaderAuth title={'Quên Mật Khẩu?'} navigation={navigation} />
        <Text style={styles.textSub}>Hãy đặt lại mật khẩu mới của bạn!</Text>
      </View>
      <View style={styles.sectionForm}>
        <MyInput
          value={password}
          onChangeText={value => setPassword(value)}
          icon={
            <MaterialCommunityIcons
              name="account"
              size={20}
              color={MyColor.primary}
            />
          }
          label={'Mật khẩu mới'}
          placeholder={'.......'}
          isPassword={true}
        />
        <MyInput
          value={rePassword}
          onChangeText={value => setRePassword(value)}
          styleContainer={styles.input}
          icon={<Feather name="lock" size={20} color={MyColor.primary} />}
          placeholder={'.......'}
          label={'Xác nhận mật khẩu'}
          isPassword={true}
        />
        <MyButton
          onPress={handleChangePassword}
          styleContainer={styles.button}
          title={'Xác nhận'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 58,
  },
  input: {
    marginTop: 28,
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
export default ForgotPasswordNewPasswordScreen;
