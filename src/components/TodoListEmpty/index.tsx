import { View, Text, Image } from "react-native";
import React from "react";
import Clipboard from "@/assets/Clipboard.png";
import { styles } from "./styles";

export default function TodoListEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.clipboard} source={Clipboard} />
        <Text style={styles.title}>Você ainda não tem terefas cadastradas</Text>
        <Text style={styles.subTitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
