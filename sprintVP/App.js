import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    // fazendo promisse utilizando then e catch
    // axios.post('http://172.20.10.7:3000/ola', { nome: "Vamos Parcelar!" })
    //   .then(response => {
    //     setMensagem(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    // fazendo requisicao utilizando metodo async, await
      async function fetchMensagem() {
        try {
          const response = await axios.post('http://172.20.10.7:3000/ola', { nome: "Vamos Parcelar!" })
          setMensagem(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      fetchMensagem();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>{ mensagem }</Text>
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
});
