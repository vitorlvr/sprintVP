import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import getCards from './GetCards';

import IconVisa from '../assets/logo-visa.png';
import IconMaster from '../assets/mastercard-logo.png';
import IconElo from '../assets/elo-logo.png';


export default function ListaCartoes({ card }) {
    const [cards, setCards] = useState(card);

    async function fetchCards() {
        const cardsData = await getCards();
        if (cardsData == null) {
          console.log('Error fetching cards', error);
        } else {
          setCards(cardsData);
        }
    }

      useEffect(() => {
        fetchCards();
      }, []);
      
    
      const renderNewCard = () => {
        if (cards.length === 0) {
          return null;
        }
      
        const newCard = cards[cards.length - 1]; // Acessa o cartão mais recente
      
        return (
          <View style={styles.cartao}>
            <View style={styles.information}>
              <View>
                <Text style={[styles.textoCartao, { fontWeight: 'bold', fontSize: 18 }]}>
                  {newCard.number}
                </Text>
                <Text style={styles.textoCartao}>{newCard.name}</Text>
                <Text style={styles.textoCartao}>{newCard.expirationDate}</Text>
              </View>
      
              {newCard.number.charAt(0) === '4' && (
                <Image source={IconVisa} style={styles.imagemBandeira} />
              )}
              {newCard.number.charAt(0) === '5' && (
                <Image source={IconMaster} style={styles.imagemBandeira} />
              )}
              {newCard.number.charAt(0) === '6' && (
                <Image source={IconElo} style={styles.imagemBandeira} />
              )}
            </View>
          </View>
        );
      };
      
      
      const [exibirCampos, setExibirCampos] = useState(false);
      const handleCliqueVisa = () => {
        setExibirCampos(!exibirCampos);
      };

    return(
        <View>
            <TouchableOpacity onPress={handleCliqueVisa} style={styles.button}>
        <MaterialCommunityIcons name="credit-card-lock" size={30} color={'#460fc9'} />
        <View style={styles.content}>
          <Text style={styles.textoBotao}>Visa **** {(cards.number && cards.number.slice(-4)) || ''}</Text>
          <Text style={styles.descricaoCartao}>Em até 12x.</Text>
        </View>
        <MaterialCommunityIcons name="chevron-down" size={24} color="#42007F" />
      </TouchableOpacity>
      
      {exibirCampos && (
        renderNewCard()
      )}
    </View>
    );
}

const styles = StyleSheet.create({
    cartao: {
      backgroundColor: "#6600C7", 
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
    textoDescricao: {
      fontFamily: 'MontserratRegular',
      padding: 2,
      fontSize: 16,
    }
});