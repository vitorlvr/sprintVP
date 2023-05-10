import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

import { PaymentIcon } from 'react-native-payment-icons';

export default function Footer() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.container, { paddingHorizontal: windowWidth * 0.05 }]}>
      <PaymentIcon type='visa' width={windowWidth * 0.1} />
      <PaymentIcon type='master' width={windowWidth * 0.1} />
      <PaymentIcon type='elo' width={windowWidth * 0.1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});