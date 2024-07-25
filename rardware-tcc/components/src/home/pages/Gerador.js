import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import QRCode from 'react-native-qrcode-svg';

const GeradorScreen = ({ navigation }) => {
  const [url, setUrl] = useState('');
  const [image, setImage] = useState(null);
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
        <View style={styles.buttonArea}>
          <Text style={styles.title2}>Insira a URL da imagem</Text>
          <TextInput
            style={styles.input}
            placeholder="URL"
            placeholderTextColor="#d3d3d3"
            value={url}
            onChangeText={setUrl}
          />
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Carregar um modelo</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
        <View style={styles.buttonArea2}>
          <TouchableOpacity style={styles.leitor} onPress={() => alert('Leitor button pressed')}>
            <Image source={require('../../Icons/BtnLeitor/leitor.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>Clique para</Text>
          <Text style={styles.title}>Gerar o QRCode</Text>
          {url ? (
            <QRCode
              value={url}
              size={200}
            />
          ) : null}
        </View>
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
    backgroundColor: 'transparent',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
    width: '70%',
    borderRadius: 5,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonArea: {
    alignItems: 'flex-start',
    paddingTop: 100,
    paddingLeft: 100,
  },
  buttonArea2: {
    alignItems: 'center',
    paddingTop:50,
  },
  leitor: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins',
    color: 'white',
  },
  title2: {
    fontSize: 15,
    fontFamily: 'Poppins',
    color: 'white',
  },
});

export default GeradorScreen;
