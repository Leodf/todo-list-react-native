import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

type TodoHeadProps = {
  countCreated: number;
  countDone: number;
};

export default function TodoHead({
  countCreated = 0,
  countDone = 0,
}: TodoHeadProps) {
  return (
    <View style={styles.listHeadView}>
      <View style={styles.item}>
        <Text style={styles.listHeadTextLeft}>Criadas</Text>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{countCreated}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.listHeadTextRight}>Concluídas</Text>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{countDone}</Text>
        </View>
      </View>
    </View>
  );
}
