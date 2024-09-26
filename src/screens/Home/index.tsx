import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "@/components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#F2F2F2", fontSize: 24 }}>Home</Text>
      </View>
    </View>
  );
}
