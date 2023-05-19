import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./components/Header";
import ItemClicavel from "./components/ItemClicavel";


export default function Cartoes() {
    return(
        <View style={styles.container}>

            <Header />

            <View style={styles.main}>
                <Text style={styles.titulo}>Qual cartão de crédito você prefere usar?</Text>
                <ItemClicavel />
            </View>
                                              
        </View>           
    );


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f6f9",
    },
    main: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        fontFamily: "MontserratRegular",
        textAlign: "center",
        fontSize: 18,
        padding: 15,
        marginVertical: 50,
    },
});