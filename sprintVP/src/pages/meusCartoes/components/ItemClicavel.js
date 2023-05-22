import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';

import { MaterialCommunityIcons, AntDesign, Octicons } from '@expo/vector-icons';
import axios from 'axios';

import ListaCartoes from './ListaCartoes';

const { height } = Dimensions.get('window');

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
        <View style={styles.container}>
          <ScrollView >
            <View style={styles.cartao}>

            </View>
            
            <View style={styles.input}>
              <AntDesign name='user'size={20} color={"#6A1B9A"} style={{marginRight: 10,}}/>
              <TextInput
                placeholder="Nome do Titular"
                value={name}
                onChangeText={setName}
                returnKeyType="send"
                style={styles.textoInput}
              />
            </View>

            <View style={styles.input}> 
            <Octicons name='number'size={20} color={"#6A1B9A"} style={{marginRight: 10,}}/> 
              <TextInput
                placeholder="Número do Cartão"
                value={number}
                onChangeText={setNumber}
                returnKeyType="send"
                style={styles.textoInput}
              />
            </View>
            
            

            <View style={styles.containerInputsJuntos}>
              <View style={styles.inputsJuntos}>
                <AntDesign name='calendar'size={20} color={"#6A1B9A"} style={{marginRight: 10,}}/>
                <TextInput
                placeholder="Validade"
                value={expirationDate}
                onChangeText={setExpirationDate}
                returnKeyType="send"
                style={styles.textoInput}
                />
              </View>

              <View style={styles.inputsJuntos}>
                <MaterialCommunityIcons name='lock'size={20} color={"#6A1B9A"} style={{marginRight: 10,}}/>
                <TextInput
                  placeholder="CVV"
                  value={cvv}
                  onChangeText={setCvv}
                  returnKeyType="send"
                  secureTextEntry={true}
                  style={[styles.textoInput, {width: 100},]}
                />
              </View>
            </View>  

              

            <TouchableOpacity style={styles.botao} onPress={handleAddCard}>
              <Text style={styles.textoEnviar}>Cadastrar</Text>
            </TouchableOpacity>
            
          </ScrollView>
        </View>
      )}
          <ListaCartoes />
        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      padding: 10,
      borderRadius: 55,
      backgroundColor: "#f3f6f9",
    },
    cartao: {
      backgroundColor: "#6A1B9A", 
      width: 310, 
      height: 160,
      borderRadius: 20,
      alignItems: 'center',
      marginLeft: 25,
      marginBottom: 15,
      
    },
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
        
    },
    input: {
        backgroundColor: "#BDBDBD50",
        width: "100%",
        height: 60,
        marginTop: 14,
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerInputsJuntos: {
      flexDirection: 'row',
    },
    inputsJuntos: {
      backgroundColor: "#BDBDBD50",
      width: "45%",
      height: 60,
      marginTop: 14,
      borderRadius: 8,
      marginHorizontal: 10,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textoInput: {
        fontSize: 15,
        fontFamily: "MontserratBold",
        padding: 8,
        color: "#000",
    },
    botao: {
      alignItems: "center",
      justifyContent: 'center',
      width: "100%", 
      height: 55,
      marginVertical: 20,
      borderRadius: 55,
      backgroundColor: "#6A1B9A",
    },
    textoEnviar: {
        fontSize: 20,
        color: '#fff',
        fontFamily: "MontserratBold",
        padding: 5,
    },
});

export default ItemClicavel;
