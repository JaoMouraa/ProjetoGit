import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import Footer from './src/home/pages/footer';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { MenuIcon } from './src/Icons/Menu';
import styled from 'styled-components';

import AppNavigator from './src/lib/Router';

const ScreenArea = styled.View`
  align-items: center;
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../assets/fontes/Poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#0F0F0F', '#0F0F0F', '#1B3CD4', '#3D60FF']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.background}
    >
      <View style={styles.header}>
      
        <TouchableOpacity >
          <MenuIcon />
        </TouchableOpacity>
        <Image source={require('./src/Icons/LogoMin/logo.white.png')}
          style={styles.logo}/>
      </View>
      <ScreenArea><Text style={styles.Txt1}>Seja bem vindo!</Text></ScreenArea>
      <View style={styles.content}>
        <AppNavigator />
      </View>
      <StatusBar/>
      <Footer />
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingTop:25,
    justifyContent: 'space-between',
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  Txt1: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 40,
    paddingTop: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
  },
});