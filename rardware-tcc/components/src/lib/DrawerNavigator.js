import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../home/pages/HomeScreen';
import GeradorScreen from '../home/pages/Gerador';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Leitor QRCode" component={HomeScreen} />
      <Drawer.Screen name="Gerador QRCode" component={GeradorScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
