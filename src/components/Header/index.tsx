import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "@/assets/Logo.png";
import { styles } from "./styles";
import { colors } from "@/constants/tokens";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo}></Image>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray[300]}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
