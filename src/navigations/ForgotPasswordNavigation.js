import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPasswordVerificationScreen from '../screens/forgotPassword/ForgotPasswordVerificationScreen';
import ForgotPasswordNewPasswordScreen from '../screens/forgotPassword/ForgotPasswordNewPasswordScreen';
import ForgotPasswordEnterCodeScreen from '../screens/forgotPassword/ForgotPasswordEnterCodeScreen';
const Stack = createNativeStackNavigator();
const ForgotPasswordNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ForgotPasswordVerification'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ForgotPasswordVerification"
        component={ForgotPasswordVerificationScreen}
      />
      <Stack.Screen
        name="ForgotPasswordEnterCode"
        component={ForgotPasswordEnterCodeScreen}
      />
      <Stack.Screen
        name="ForgotPasswordNewPassword"
        component={ForgotPasswordNewPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default ForgotPasswordNavigation;
