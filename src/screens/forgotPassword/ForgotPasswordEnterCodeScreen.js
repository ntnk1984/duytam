import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderAuth from '../../components/authUser/HeaderAuth';
import MyInput from '../../components/MyInput';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MyColor} from '../../assets/colors';
import MyButton from '../../components/MyButton';

const ForgotPasswordEnterCodeScreen = ({navigation}) => {
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
          keyboardType="numeric"
          styleTextInput={styles.input}
          maxLength={6}
          icon={
            <MaterialCommunityIcons
              name="account"
              size={20}
              color={MyColor.primary}
            />
          }
          label={'Mã xác thực'}
          placeholder={'Ex: 123456'}
        />
        <MyButton onPress={handleCommit} title={'Xác thực'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    color: 'red',
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
