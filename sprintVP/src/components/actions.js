import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Actions() {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal
    showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Ionicons name="car-sharp" size={45} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Multas, IPVA e outros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <MaterialCommunityIcons name="barcode-scan" size={45} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Boletos Diversos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Ionicons name="water-sharp" size={45} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Água, Luz e Internet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Ionicons name="school" size={45} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Escola e Faculdade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome name="bank" size={45} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Impostos de Secretaria de Fazenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <MaterialCommunityIcons name="home-city" size={45} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Condomínio e Aluguel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingTop: -24,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginTop: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "black",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: 110,
    height: 110,
  },
  areaButton: {
    height: 60,
    width: 60,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: 'sans-serif',
    textAlign: "center",
    fontWeight: "bold",
    color: "#460fc9",
    paddingBottom: 5,
  }
});