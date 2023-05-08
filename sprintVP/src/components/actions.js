import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Ionicons name="car-sharp" size={24} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Multas, IPVA e outros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <MaterialCommunityIcons name="barcode-scan" size={24} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Boletos Diversos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Ionicons name="water-sharp" size={24} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Água, Luz e Internet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Ionicons name="school" size={24} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Escola e Faculdade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome name="bank" size={24} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Impostos de Secretaria de Fazenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <MaterialCommunityIcons name="home-city" size={24} color="#460fc9" />
        </View>
        <Text style={styles.labelButton}>Condomínio e Aluguel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: 'space-between',
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: -24,
    zIndex: 2,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
    backgroundColor: "#fff",
    borderRadius: 44/ 2,
    borderColor: "black",
    borderBottomWidth: 1,
    width: 120,
    height: 120,
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
    textAlign: "center",
    fontWeight: "bold",
    color: "#460fc9"
  },
});