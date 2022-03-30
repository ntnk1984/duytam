import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordNavigation from './ForgotPasswordNavigation';
import MainBottomTab from './MainBottomTab';
import CreateShippingOrderScreen from '../screens/CreateShippingOrderScreen';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name={'ForgotPasswordNavigation'}
          component={ForgotPasswordNavigation}
        />
        <Stack.Screen name={'MainBottomTab'} component={MainBottomTab} />
        <Stack.Screen
          name={'CreateShippingOrder'}
          component={CreateShippingOrderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
