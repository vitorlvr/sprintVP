import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View, Modal } from 'react-native';

import CodeBarScanner from './components/CodeBarScanner';

export default function Scanner() {
    const [modalVisible, setModalVisible] = React.useState(false);

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
                    <Button title='Fechar Modal' onPress={() => setModalVisible(false)} />
                </View>
            </Modal>

            <Button title='Scan' onPress={() => setModalVisible(true)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey'
    },
})