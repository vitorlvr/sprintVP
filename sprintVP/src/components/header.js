import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import React from 'react';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}) {

    return (
      <View style={styles.container}>
        <Text style={styles.initialText}>Selecione uma categoria de pagamento</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
      zIndex: 1,
      flexDirection: 'row',
      backgroundColor: '#460fc9',
      paddingTop: StatusBarHeight,
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 74,
    },
    initialText: {
      flex: 1,
      width: '100%',
      textAlign: 'center',
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
    }
});