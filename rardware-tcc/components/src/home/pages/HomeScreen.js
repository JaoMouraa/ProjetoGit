import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../../../assets/fontes/Poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    
    <LinearGradient
      colors={['#0F0F0F','#1B3CD4','#1B3CD4', '#1B3CD4', '#3D60FF']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 2 }}
      style={styles.background}
    >
      <View style={styles.container}>
      <TouchableOpacity style={styles.leitor} onPress={() => alert('Leitor button pressed')} >
        <Image source={require('../../Icons/BtnLeitor/leitor.png')} />
        
      </TouchableOpacity>
      <Text style={styles.title}>Clique para</Text>
      <Text style={styles.title}>Ler o QRCode</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  leitor:{
    paddingTop: 100 ,
    paddingBottom:10, 
  },
title: {
    fontSize: 25,
    fontFamily:'Poppins',
    color: 'white',
    
  },
  
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
});


export default HomeScreen;