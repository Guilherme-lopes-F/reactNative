import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import { Image, TextInput, StyleSheet, Button, Text, View } from 'react-native';



function App() {
  return (
    <View style={styles.container}>
      <Image

        style={styles.avatar}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/6388/6388307.png'
        }}
      />
      <Text
        style={styles.texto}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu Email'
        keyboardType='text'

      />
      <Text
        style={styles.texto}
      >
        senha

      </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        keyboardType='numeric'
        secureTextEntry

      />
      <View style={{ marginTop: 20, width: 200 }}>
        <Button
          title="Logar"
          color='#69b7ff'
          onPress={() => alert('Login feito')}
        />
      </View>
      <View style={{ marginTop: 20, width: 200 }}>
        <Button
          title="cadastrar"
          color='#69b7ff'
          onPress={() => alert('cadastro feito')}
        />
      </View>
      <Text>Clique para recuperar a senha</Text>
    </View>
  );
}

  function Cadatro() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.titulo}>
        Cadastro
      </Text>
      
      <Text
        style={styles.texto}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu Email'
        keyboardType='text'

      />
      <Text
        style={styles.texto}
      >
        senha

      </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        keyboardType='numeric'
        secureTextEntry

      />
      <View style={{ marginTop: 20, width: 300, marginBottom:200}}>
        <Button
          title="cadastrar"
          color='#69b7ff'
          onPress={() => alert('cadastro feito')}
        />
      </View>
    </View>
  );
}

export default function recuperar() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.titulo}>
        Recuperar Senha
      </Text>
      
      <Text
        style={styles.texto}>
        Email
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu Email'
        keyboardType='text'

      />
      <View style={{ marginTop: 20, width: 300, marginBottom:200}}>
        <Button
          title="Recuperar"
          color='#69b7ff'
          onPress={() => alert('Senha recuperada')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6da',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  input: {
    height: 60,
    width: 300,
    borderColor: '#000000',
    backgroundColor: '#d1d1d0',
    marginBottom:20,
  },
  texto: {
    marginRight: 250,
    margin: 0,
    marginTop: 30,
  },
  titulo:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:300,

  }
});
