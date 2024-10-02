import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Logo from "@/assets/Logo.png";
import { styles } from "./styles";
import { colors } from "@/constants/tokens";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={Logo}></Image>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray[300]}
          selectionColor={colors.gray[300]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? colors.blue : colors.blueDark },
          ]}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
