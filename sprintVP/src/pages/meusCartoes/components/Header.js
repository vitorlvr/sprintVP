import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {

  return (
    <LinearGradient
      colors={['#42007F', '#6600C7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.33, 1]}
      style={styles.container}
    >
      <Text style={styles.initialText}>Meus Cartões</Text>
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flexDirection: 'row',
    backgroundColor: '#42007F',
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