import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

//import LogoVp.png from '../../assets/LogoVp.png'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Bem vindo, {"name"}!</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name='user' size={30} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#460fc9',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 20,
        paddingEnd: 20,
        paddingBottom: 120
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    username: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    buttonUser: {
        backgroundColor: '#a493e7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        padding: 8
    }
})

// rgb(255, 68, 204)