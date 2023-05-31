import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

export default function Header({ name }) {
    const imageWidth = 100; // Defina a largura desejada para a imagem
    const imageHeight = (imageWidth / 1533) * 5144; // Altura proporcional à largura da imagem

    return (
        <LinearGradient
            colors={['#42007F', '#6600C7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.33, 1]}
            style={styles.container}
        >
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/logoVp.png')}
                        resizeMode="contain"
                        style={{ width: imageWidth, height: imageHeight, padding: 0, margin: 0 }}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.msgView}>
                <Text style={styles.msgText}>Bem vindo! Selecione uma categoria:</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#460fc9',
      paddingTop: statusBarHeight,
      paddingVertical: 20,
      marginTop: -130,
      shadowOffset: { 
        width: 5, 
        height: 5,
      },
      shadowColor: "000",
      shadowOpacity: 0.75,
      shadowRadius: 5,
      elevation: 9,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 0,
    },
    logoContainer: {
        marginRight: 10,
    },
    msgText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        padding: 0,
        marginTop: -200,
    },
    msgView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonUser: {
        backgroundColor: '#a493e7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        padding: 8,
    },
});