import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {MyColor} from '../../assets/colors';

const OrdersScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
            }}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.textName}>Nguyễn Văn Nam</Text>
            <Text style={styles.textAddress}>Dương Thị Mười, quận 12, HCM</Text>
          </View>
        </View>
        <Text onPress={() => navigation.navigate('CreateShippingOrder')}>
          Tạo đơn
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textName: {
    color: MyColor.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textAddress: {
    color: MyColor.gray,
    fontSize: 12,
  },
  infoTextContainer: {
    marginStart: 8,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 40,
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    paddingTop: 56,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});
export default OrdersScreen;
