import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function TodoHead() {
  return (
    <View style={styles.listHeadView}>
      <View style={styles.item}>
        <Text style={styles.listHeadTextLeft}>Criadas</Text>
        <View style={styles.countContainer}>
          <Text style={styles.count}>0</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.listHeadTextRight}>Concluídas</Text>
        <View style={styles.countContainer}>
          <Text style={styles.count}>0</Text>
        </View>
      </View>
    </View>
  );
}
