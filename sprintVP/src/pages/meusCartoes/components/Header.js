import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {

  return (
    <View style={styles.container}>
      <Text style={styles.initialText}>Meus Cartões</Text>
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
    paddingBottom: 20,
  },
  initialText: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontfamily: 'sans-serif',
  }
});