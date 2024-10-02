import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Logo from "@/assets/Logo.png";
import { styles } from "./styles";
import { colors } from "@/constants/tokens";

type HeaderProps = {
  todoDescription: string;
  setTodoDescription: Dispatch<SetStateAction<string>>;
  handleTodoAdd: () => void;
};

export default function Header({
  todoDescription,
  setTodoDescription,
  handleTodoAdd,
}: HeaderProps) {
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
          value={todoDescription}
          onChangeText={setTodoDescription}
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? colors.blue : colors.blueDark },
          ]}
          onPress={handleTodoAdd}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
