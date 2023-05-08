import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

import { PaymentIcon } from 'react-native-payment-icons'

export default function Footer() {

    return (
      <View style={styles.container}>
        <PaymentIcon type='visa' width={50}/>
        <PaymentIcon type='master' width={50}/>
        <PaymentIcon type='elo' width={50}/>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 16,
      paddingEnd: 16,
    }
});