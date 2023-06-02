import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);

    return(
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{ data.date }</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                { showValue ? 
                    <AnimatePresence exitBefore>
                        <MotiText 
                        style={styles.value}
                        from={{
                            translateX: 100,
                        }}
                        animate={{
                            translateX: 0,
                        }}
                        transition={{
                            type:'spring',
                            duration: 500,
                        }}
                        >
                            R$ -{data.value}
                        </MotiText>
                    </AnimatePresence>
                :
                    <AnimatePresence exitBefore>
                        <MotiView 
                        style={styles.skeleton}
                        from={{ opacity:0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'timing' }}
                        >
                        </MotiView>
                    </AnimatePresence>
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
    
});