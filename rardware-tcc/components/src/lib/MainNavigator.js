import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login';
import SignupScreen from '../Sign';
import App from '../../Index';
import AppNavigator from './Router'; // Importando seu Tab Navigator

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Index" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
