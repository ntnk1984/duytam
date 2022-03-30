import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HelperScreen from '../screens/mainBottomTab/HelperScreen';
import WalletScreen from '../screens/mainBottomTab/WalletScreen';
import OrdersScreen from '../screens/mainBottomTab/OrdersScreen';
import AccountScreen from '../screens/mainBottomTab/AccountScreen';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import {MyColor} from '../assets/colors';

const Tab = createBottomTabNavigator();
const MainBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Orders'}
      screenOptions={{
        tabBarActiveTintColor: MyColor.primary,
        tabBarInactiveTintColor: MyColor.gray,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Helper"
        component={HelperScreen}
        options={{
          tabBarLabel: 'Hỗ trợ',
          tabBarIcon: ({focused, color}) => {
            return (
              <MaterialIcons
                name="live-help"
                size={focused ? 25 : 20}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Ví',
          tabBarIcon: ({focused, color}) => {
            return (
              <MaterialIcons
                name="account-balance-wallet"
                size={focused ? 25 : 20}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Đơn hàng',
          tabBarIcon: ({focused, color}) => {
            return (
              <MaterialIcons
                name="view-list"
                size={focused ? 25 : 20}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({focused, color}) => {
            return (
              <Ionicons
                name="person-sharp"
                size={focused ? 25 : 20}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
