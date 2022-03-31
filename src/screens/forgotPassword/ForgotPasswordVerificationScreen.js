import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderAuth from '../../components/authUser/HeaderAuth';
import MyInput from '../../components/MyInput';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MyColor} from '../../assets/colors';
import MyButton from '../../components/MyButton';

const ForgotPasswordVerificationScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const handleCommit = () => {
    navigation.navigate('ForgotPasswordEnterCode');
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <HeaderAuth title={'Quên Mật Khẩu?'} navigation={navigation} />
        <Text style={styles.textSub}>
          Khôi phục mật khẩu của bạn nếu bạn {'\n'}quên mật khẩu?
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
          label={'Số điện thoại'}
          placeholder={'Ex: 0784514xxx'}
        />
        <MyButton onPress={handleCommit} title={'Xác nhận'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default ForgotPasswordVerificationScreen;
