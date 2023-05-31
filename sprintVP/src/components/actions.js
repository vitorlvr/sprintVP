import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Actions() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Ionicons name="car-sharp" size={45} color='rgb(66, 0, 127)' />
          </View>
          <Text style={styles.labelButton}>Multas, IPVA e outros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <MaterialCommunityIcons name="barcode-scan" size={45} color='rgb(66, 0, 127)' />
          </View>
          <Text style={styles.labelButton}>Boletos Diversos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Ionicons name="water-sharp" size={45} color='rgb(66, 0, 127)' />
          </View>
          <Text style={styles.labelButton}>Água, Luz e Internet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Ionicons name="school" size={45} color='rgb(66, 0, 127)' />
          </View>
          <Text style={styles.labelButton}>Escola e Faculdade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FontAwesome name="bank" size={45} color='rgb(66, 0, 127)' />
          </View>
          <Text style={styles.labelButton}>Impostos de Secretaria de Fazenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <MaterialCommunityIcons name="home-city" size={45} color='rgb(66, 0, 127)' />
          </View>
          <Text style={styles.labelButton}>Condomínio e Aluguel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingTop: -24,
    marginTop: -50
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginTop: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOffset: { 
      width: 5, 
      height: 5,
    },
    shadowColor: "000",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
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
    color: 'rgb(66, 0, 127)',
    paddingBottom: 5,
  }
})