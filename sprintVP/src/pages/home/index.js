import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// Importação dos componentes
import Header from '../../components/header';
import Actions from '../../components/actions';
import Footer from '../../components/footer';
import SideMenu from '../../components/pushMenu';

// Função da página Home
export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <Header/>

      <SideMenu/>

      <Actions navigation={navigation}/>

      <Footer/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});
