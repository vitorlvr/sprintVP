import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Multas, IPVA e outros</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Boletos Diversos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Água, Luz e Internet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Escola e Faculdade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="codepen" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Impostos de Secretaria de Fazenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
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
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
    backgroundColor: "#ecf0f1",
    width: 80,
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
  },
});