// src/components/Footer.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LeitorIcon } from '../../Icons/BtnLeitor/index';


const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <LeitorIcon style={styles.logo}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Ajuda')} style={styles.button}>
        <Image source={require('../../Icons/ajudaIcon.png')} style={styles.logo}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1B3CD4',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

});

export default Footer;
