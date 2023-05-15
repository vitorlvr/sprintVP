import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Menu() {
    return(
        <View style={styles.container}>
            <Text>Página Menu</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f6f9",
    }
})