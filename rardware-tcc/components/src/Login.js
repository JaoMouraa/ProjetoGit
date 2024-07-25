import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Continue com o login
    navigation.navigate('Index');
  };
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../assets/fontes/Poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient
      colors={['#000000', '#0000FF']}
      style={styles.background}
    >
    
      <View style={styles.container}>
      <View style={styles.Logo}>
        <Image source={require('./Icons/LogoMax/LogoMax.png')}
        style={styles.LogoMax}/>
      </View>
        
        
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Faça login e continue</Text>

        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          placeholderTextColor="#d3d3d3"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="SENHA"
          placeholderTextColor="#d3d3d3"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Conecte-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  LogoMax:{
    width:400,
    height:120,
    resizeMode:'contain',
  },
  Logo:{
    paddingTop:50,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: 'white',
    marginVertical: 10,
    
  },
  title: {
    fontSize: 40,
    fontFamily:'Poppins',
    fontWeight:'bold',
    color: 'white',
    marginVertical: 20,
    
  },
  input: {
    width: '70%',
    height: 50,
    backgroundColor: '#a0a0a0',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    color: 'white',
    marginTop:50,
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginTop:50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
