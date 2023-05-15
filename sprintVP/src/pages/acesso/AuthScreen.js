import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions, SafeAreaView} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import * as LocalAuthentication from 'expo-local-authentication';

import logo from './assets/logo-escrita.png'
import Animation from "./componentes/Animation";

const AuthScreen = ({ navigation }) => {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });
  
  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Autenticar',
      fallbackLabel: 'Inserir Senha',
    });
    auth.then(result => {
      navigation.navigate('Routes');
      setIsAuthenticated(result.success);
    }
    );
  }

    return (
        <View style={styles.container}>

            <Image source={logo} style ={styles.logo}/>

            <Text style={styles.titulo}> Olá!</Text>
            <Text style={styles.texto}>Para realizarmos seus pagamentos acesse ou crie sua conta.</Text> 
            <Text style={styles.texto}>É rápido, gratuito e muito seguro!</Text>

            <Animation />

            <LinearGradient 
            colors={['#5619b4', '#5619b4', '#10cfc9']} 
            start={{ y: 0.0, x: 0.0 }} end={{ y: 1.0, x: 1.0 }}
            style={styles.botao}
            >
                { isAuthenticated 
                    ? <TouchableOpacity onPress={onAuthenticate} style={styles.botao}>
                        <Text style={styles.textoBotao}>LOGIN</Text>
                      </TouchableOpacity>
                    :  <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}>LOGIN</Text>
                      </TouchableOpacity>
                }
                
            </LinearGradient>

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
        fontFamily: "MontserratBold",
    },
    texto: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 15,
        fontFamily: "MontserratRegular",
    },
    botao: {
        alignItems: "center",
        width: 350, 
        marginVertical: 10,
        borderRadius: 10,
    },
    textoBotao: {
        fontSize: 20,
        color: '#fff',
        fontFamily: "MontserratBold",
    },

});

export default AuthScreen;