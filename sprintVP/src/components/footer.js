import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import React from 'react';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Footer() {

    return (
      <View style={styles.container}>
        
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
    },
});