import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// Importação dos componentes
import Header from '../../components/header';
import Actions from '../../components/actions';
import Footer from '../../components/footer';

// Função da página Home
export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <Header/>

      <Actions navigation={navigation}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});
