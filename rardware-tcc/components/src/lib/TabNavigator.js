import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../home/pages/HomeScreen';
import GeradorScreen from '../home/pages/Gerador';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Leitor QRCode" component={HomeScreen} />
      <Tab.Screen name="Gerador QRCode" component={GeradorScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
