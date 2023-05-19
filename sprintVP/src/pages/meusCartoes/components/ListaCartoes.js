import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import getCards from './GetCards';


export default function ListaCartoes() {
    const [cards, setCards] = useState('');
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
        fetchCards();
        if (cards.length === 0) {
          return null;
        }
      
        return (
          <View>
            {cards.map((card) => (
              <View key={card.id}>
                <Text>Card Name: {card.name}</Text>
                <Text>Card Number: {card.number}</Text>
                <Text>Expiration Date: {card.expirationDate}</Text>
                <Text>CVV: {card.cvv}</Text>
              </View>
            ))}
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
        <MaterialCommunityIcons name="chevron-down" size={24} color="#460fc9" />
      </TouchableOpacity>
      
      {exibirCampos && (
        renderNewCard()
      )}
      
    </View>
    );
}

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