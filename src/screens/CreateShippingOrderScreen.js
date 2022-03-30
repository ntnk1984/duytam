import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import {MyColor} from '../assets/colors';
const CreateShippingOrderScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionNavigation}>
        <MaterialIcons
          onPress={() => navigation.goBack()}
          name="clear"
          size={24}
          color="black"
        />
        <Text style={styles.titleScreen}>TẠO ĐƠN HÀNG</Text>
      </View>
      <ScrollView>
        <View style={styles.sectionUsersContainer}>
          <View style={styles.sectionUserContainer}>
            <MaterialIcons name="my-location" size={24} color="#3FA54F" />
            <View style={styles.sectionInfoUser}>
              <Text style={styles.textGray}>Người gửi</Text>
              <Text style={styles.textNameUser}>Nguyễn Phong Linh</Text>
              <Text numberOfLines={1} style={styles.textAddressUser}>
                Công viên phần mềm Quang Trung, phường Tân
              </Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </View>
          <View style={styles.iconChangeAddress}>
            <MaterialIcons
              name="multiple-stop"
              size={24}
              color={MyColor.primary}
            />
          </View>
          <View style={styles.sectionUserContainer}>
            <MaterialIcons name="location-on" size={24} color="#FF4A4A" />
            <View style={styles.sectionInfoUser}>
              <Text style={styles.textGray}>Người nhận</Text>
              <Text numberOfLines={1} style={styles.textNameUser}>
                Nguyễn Đăng Trường
              </Text>
              <Text numberOfLines={1} style={styles.textAddressUser}>
                Phạm Ngũ Lão, quận Gò Vấp
              </Text>
            </View>
            <Ionicons name="ios-chevron-forward" size={24} color="black" />
          </View>
        </View>
        <View style={styles.goodsContainer}>
          <Text style={styles.titleSection}>Thông tin hàng hoá</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  titleSection: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  goodsContainer: {
    marginTop: 32,
  },
  sectionUsersContainer: {
    marginTop: 48,
  },
  iconChangeAddress: {
    transform: [{rotate: '90deg'}],
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  textAddressUser: {
    color: '#323232',
  },
  textNameUser: {
    color: MyColor.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textGray: {
    color: '#C4C4C4',
  },
  sectionInfoUser: {
    marginHorizontal: 8,
    flex: 1,
  },
  sectionUserContainer: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 6,
  },
  titleScreen: {
    fontSize: 16,
    flex: 1,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});
export default CreateShippingOrderScreen;
