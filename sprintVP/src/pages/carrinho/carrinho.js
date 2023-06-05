import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from "react-native";
import { VictoryPie, VictoryTooltip } from 'victory-native';
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from '@rneui/themed';

const DATA = [
  {
    x: 'Rio De Janeiro',
    y: 60,
    color: 'green',
  },
  {
    x: 'São Paulo',
    y: 120,
    color: 'blue',
  },
  {
    x: 'Brasília',
    y: 30,
    color: 'purple',
  },
];

const Carrinho = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#42007F', '#6600C7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.33, 1]}
        style={styles.pageHeader}
      >
        <View style={styles.headerButtons}>
          <Text style={styles.headerButton}>Next</Text>
          <Text style={styles.resumo}>Resumo</Text>
          <Text style={styles.headerButton}>Voltar</Text>
        </View>
      </LinearGradient>
      <TouchableWithoutFeedback onPress={() => setSelected('')}>
        <View style={styles.graficoCircular}>
          <StatusBar style='light' backgroundColor='transparent' translucent />
          <VictoryPie data={DATA} colorScale={DATA.map((value) => value.color)}
            style={{
              labels: { display: 'none' },
              data: { fillOpacity: ({ datum }) => (datum.x === selected ? 1 : 0.3) }
            }}
            innerRadius={120}
            labelComponent={<VictoryTooltip renderInPortal={false} style={{ color: 'black' }} orientation={'top'} />}
          />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.totalAPagar}>
        Total a pagar
      </Text>
      <ScrollView style={styles.confMenu}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Carrinho</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <View style={styles.separator} />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Cartão</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Parcelas</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      <View style={styles.checkboxView} />
      <Text style={styles.linkCheck}>
        Li e aceito as normas de pagamento
      </Text>
      <LinearGradient
        colors={['#42007F', '#6600C7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.33, 1]}
        style={styles.botao}
      >
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>FINALIZAR PAGAMENTO</Text>
        </TouchableOpacity>
      </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#f3f6f9',
  },
  pageHeader: {
    height: 120,
  },
  headerButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 55,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerButton: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700"
  },
  resumo: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "700"
  },
  graficoCircular: {
    height: 0,
  },
  totalAPagar: {
    textAlign: 'center',
    color: "black",
    fontSize: 24,
    marginTop: 130,
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 0,
    marginHorizontal: 12,
  },
  confMenu: {
    marginTop: 200,
    alignItems: "center",
  },
  linkCheck: {
    marginTop: 30,
    marginLeft: 20,
  },
  botao: {
    alignItems: "center",
    width: 350,
    marginVertical: 10,
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 18,
    color: '#fff',
    fontFamily: "MontserratBold",
  },
});

export default Carrinho;