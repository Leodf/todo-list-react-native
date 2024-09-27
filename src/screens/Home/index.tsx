import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "@/components/Header";
import TodoHead from "@/components/TodoHead";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoHead />
    </View>
  );
}
