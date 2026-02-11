import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,TextInput, StyleSheet, Button,Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      
      style={styles.avatar}
      source={{
        uri:'https://cdn-icons-png.flaticon.com/512/6388/6388307.png'
      }}
      
      />
      <Button
      title="Logar"
      color='#69ffb9'
      onPress={() => showAlert('Login feito')}
      />
       <Button
      title="cadastrar"
      color='#69ffb9'
      onPress={() => showAlert('cadastro feito')}
      />
      <Text>Clique para recuperar a senha</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e6bd',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20,
  },
  avatar:{
    width:100,
    height:100
  },

});
