import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList} from 'react-native';

// Importação dos componentes
import Header from '../../components/header';
import Actions from '../../components/actions';
import Balance from '../../components/balance';

// Função da página Home
export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <Header />

      <Actions navigation={navigation} />

      <Text style={styles.title}>Últimas movimentações:</Text>

      <Balance />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f9',
  },
  title: {
    paddingVertical: 50,
    paddingTop: 5,
    fontWeight: 'bold',
    paddingStart: 20,
    paddingEnd: 20,    
  }
});
