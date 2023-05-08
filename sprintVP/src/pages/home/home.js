import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [mensagem, setMensagem] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://172.20.10.7:3000/ola', { nome: name })
      setMensagem(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>{mensagem}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome:"
        value={name}
        onSubmitEditing={handleSubmit}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal: {
    fontSize: 30,
  },
  input: {
    marginTop: 20,
    width: 150,
    height: 35,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
  },
  button: {
    backgroundColor: "#2A9F85",
    width: 150,
    height: 35,
    margin: 5,
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
  },
  textoBotao: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  }
});
