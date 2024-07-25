import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../home/pages/HomeScreen';
import GeradorScreen from '../home/pages/Gerador';
import { useFonts } from 'expo-font';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../../assets/fontes/Poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar, // Estilo do tabBar
          tabBarContentContainerStyle: styles.tabBarContentContainer, // Estilo do container do conteúdo da tabBar
          tabBarLabelStyle: styles.tabBarLabel, // Adiciona estilo à label da tabBar
        }}
      >
        <Tab.Screen 
          name="Leitor QRCode" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Leitor QRCode',
          }}
        />
        <Tab.Screen 
          name="Gerador QRCode" 
          component={GeradorScreen} 
          options={{
            tabBarLabel: 'Gerador QRCode',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  tabBar: {
    backgroundColor: 'transparent', // Mantém o tabBar transparente
  },
  tabBarContentContainer: {
    // Mantém o container do conteúdo da tabBar transparente
  },
  tabBarLabel: {
    color: 'white',
    fontFamily: 'Poppins', // Define a fonte Poppins
  },
});

export default AppNavigator;
