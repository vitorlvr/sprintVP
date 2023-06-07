import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import CodeBarScanner from './components/CodeBarScanner';

export default function Scanner() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animation='fade'
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <CodeBarScanner />
          <Button title='Fechar Scanner' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
    
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey'
    },
})