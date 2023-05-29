import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

import { MaterialCommunityIcons, AntDesign, Octicons } from '@expo/vector-icons';

import axios from 'axios';

import ListaCartoes from './ListaCartoes';
import IconVisa from '../assets/logo-visa.png';
import IconMaster from '../assets/mastercard-logo.png';
import IconElo from '../assets/elo-logo.png';
import { LinearGradient } from 'expo-linear-gradient';

const ItemClicavel = () => {
  const [exibirCampos, setExibirCampos] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [newCard, setNewCard] = useState('');
  const [bandeira, setBandeira] = useState(null);
  const [cadastrarClicked, setCadastrarClicked] = useState(false); 

  useEffect(() => {
    determineCardBrand();
  }, [number]);

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

  const determineCardBrand = () => {
    const firstDigit = number.charAt(0);
    let bandeiraAtual = null;

    if (firstDigit === '4') {
      bandeiraAtual = IconVisa;
    } else if (firstDigit === '5') {
      bandeiraAtual = IconMaster;
    } else if (firstDigit === '6') {
      bandeiraAtual = IconElo;
    }

    setBandeira(bandeiraAtual);
  };

  const handleCliqueNovoCartao = () => {
    setExibirCampos(!exibirCampos);
  };

  const handleCliqueCadastrar = () => {
    setCadastrarClicked(true);
  }

  const [back, setBack] = useState(false);

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
          <ScrollView>
            <View>
              <LinearGradient
                colors={['#42007F', '#6600C7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.33, 1]}
                style={styles.cartao}
              >
                {back ? (
                  <View style={styles.versoCartao}>
                    <Text style={styles.textCVV}>{cvv}</Text>
                  </View>
                ) : (
                  <View style={styles.information}>
                    <View style={styles.frenteCartao}>
                      <Text style={[styles.textoCartao, { fontWeight: 'bold', fontSize: 18 }]}>{number}</Text>
                      <Text style={styles.textoCartao}>{name}</Text>
                      <Text style={styles.textoCartao}>{expirationDate}</Text>
                    </View>

                    {bandeira && <Image source={bandeira} style={styles.imagemBandeira} />}
                  </View>
                )}
              </LinearGradient>
            </View>

            <View style={styles.input}>
              <AntDesign name="user" size={20} color={"#5619b4"} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Nome do Titular"
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  setBack(false);
                }}
                returnKeyType="send"
                style={styles.textoInput}
              />
            </View>

            <View style={styles.input}>
              <Octicons name="number" size={20} color={"#5619b4"} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Número do Cartão"
                value={number}
                onChangeText={(text) => {
                  setNumber(text);
                  setBack(false);
                }}
                keyboardType="numbers-and-punctuation"
                returnKeyType="send"
                style={styles.textoInput}
              />
            </View>

            <View style={styles.containerInputsJuntos}>
              <View style={styles.inputsJuntos}>
                <AntDesign name="calendar" size={20} color={"#5619b4"} style={{ marginRight: 10 }} />
                <TextInput
                  placeholder="Validade"
                  value={expirationDate}
                  onChangeText={(text) => {
                    setExpirationDate(text);
                    setBack(false);
                  }}
                  keyboardType="numbers-and-punctuation"
                  returnKeyType="send"
                  style={styles.textoInput}
                />
              </View>

              <View style={styles.inputsJuntos}>
                <MaterialCommunityIcons name="lock" size={20} color={"#5619b4"} style={{ marginRight: 10 }} />
                <TextInput
                  placeholder="CVV"
                  value={cvv}
                  onChangeText={(text) => {
                    setCvv(text);
                    setBack(true);
                  }}
                  keyboardType="numbers-and-punctuation"
                  returnKeyType="send"
                  secureTextEntry={true}
                  style={[styles.textoInput, { width: 100 }]}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleAddCard && handleCliqueCadastrar}>
              <Text style={styles.textoEnviar}>Cadastrar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}

      {/* Renderiza ListaCartoes somente quando cadastrarClicked for verdadeiro */}
      {cadastrarClicked && <ListaCartoes />}
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
      backgroundColor: "#5619b4", 
      width: 310, 
      height: 160,
      borderRadius: 20,
      alignItems: 'center',
      marginLeft: 25,
      marginBottom: 15,
    },
    information: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: 14,
    },
    versoCartao: {
      width: "100%",
      height: 30,
      marginTop: 25,
      backgroundColor: "#BDBDBD",
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    textCVV: {
      marginRight: 40,

    },
    frenteCartao: {
      width: "80%",
      marginTop: 50,
          
    },
    textoCartao: {
        maxHeight: 35,
        marginTop: 8,
        color: "#FAFAFA",
        fontSize: 16,
    },
    imagemBandeira: {
      width: "20%",
      height: "35%",
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
