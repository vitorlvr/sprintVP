import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions, SafeAreaView} from 'react-native';

import logo from './assets/logo-escrita.png'
import Animation from "./componentes/Animation";

export default function AuthScreen() {

    return (
        <View style={styles.container}>

            <Image source={logo} style ={styles.logo}/>

            <Text style={styles.titulo}> Olá!</Text>
            <Text style={styles.texto}>Para realizarmos seus pagamentos acesse ou crie sua conta.</Text> 
            <Text style={styles.texto}>É rápido, gratuito e muito seguro!</Text>

            <Animation />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>LOGIN</Text>
            </TouchableOpacity>

        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f6f9",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    logo : {
        marginTop: 40,
       width: 210,
        height: 65,

    },
    titulo : {
        fontSize: 20,
        padding: 25,
        fontFamily: "RobotoBold",
    },
    texto: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 15,
        fontFamily: "RobotoRegular",
    },
    botao: {
        backgroundColor: '#5619b4',
        alignItems: "center",
        width: 350, 
        marginVertical: 15,
        borderRadius: 10,
    },
    textoBotao: {
        fontSize: 20,
        color: '#fff',
        padding: 10,
        fontFamily: "RobotoBold",
    },

});
