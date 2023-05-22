import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

import ListaCartoes from './ListaCartoes';

const ItemClicavel = () => {
  const [exibirCampos, setExibirCampos] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [newCard, setNewCard] = useState('');

  async function handleAddCard() {
    try {
      const response = await axios.post('http://172.20.10.7:3000/cards', {
        name,
        number,
        expirationDate,
        cvv
      });
      setNewCard(response.data);
      setName('');
      setNumber('');
      setExpirationDate('');
      setCvv('');
    } catch (error) {
      console.log('Error adding new Card', error);
    }
  }

  

  const handleCliqueNovoCartao = () => {
    setExibirCampos(!exibirCampos);
  };

  

  return (
    <View>
      <TouchableOpacity onPress={handleCliqueNovoCartao} style={styles.button}>
        <MaterialCommunityIcons name="credit-card-plus-outline" size={30} color={'#460fc9'} />
        <View style={styles.content}>
          <Text style={styles.textoBotao}>Novo Cartão de Crédito</Text>
          <Text style={styles.descricaoCartao}>Em até 12x. Consultar Bandeiras</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#460fc9" />
      </TouchableOpacity>

      {exibirCampos && (
        <ScrollView>
          <Text style={styles.textoInput}>Nome do Titular: </Text>
          <TextInput
            placeholder="Digite aqui"
            value={name}
            onChangeText={setName}
            returnKeyType="send"
            style={styles.input}
            onch
          />
          <Text style={styles.textoInput}>Número do Cartão: </Text>
          <TextInput
            placeholder="**** **** **** ****"
            value={number}
            onChangeText={setNumber}
            returnKeyType="send"
            style={styles.input}
          />
          <Text style={styles.textoInput}>Data de Validade: </Text>
          <TextInput
            placeholder="**/**"
            value={expirationDate}
            onChangeText={setExpirationDate}
            returnKeyType="send"
            style={styles.input}
          />
          <Text style={styles.textoInput}>Código de Segurança - CVV: </Text>
          <TextInput
            placeholder="XXX"
            value={cvv}
            onChangeText={setCvv}
            returnKeyType="send"
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity style={styles.botao} onPress={handleAddCard}>
            <Text style={styles.textoEnviar}>ADICIONAR</Text>
          </TouchableOpacity>
          
        </ScrollView>
      )}
          <ListaCartoes />
        
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#ECECEC"
      },
    textoBotao: {
        fontSize: 20,
        fontFamily: "MontserratRegular",
        marginHorizontal: 20,
    },
    descricaoCartao: {
        fontSize: 10,
        fontFamily: "MontserratRegular",
        marginHorizontal: 20,
        color: "green"
    },
    content: {
        flexDirection: "column"
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        width: "100%",
        borderRadius: 5,
        padding: 8,
    },
    textoInput: {
        fontSize: 15,
        fontFamily: "MontserratRegular",
        padding: 8,
        color: "#000",
    },
    botao: {
      alignItems: "center",
      width: 350, 
      marginVertical: 20,
      borderRadius: 5,
      backgroundColor: "#5619b4",
    },
    textoEnviar: {
        fontSize: 20,
        color: '#fff',
        fontFamily: "MontserratBold",
        padding: 5,
    },
});

export default ItemClicavel;
