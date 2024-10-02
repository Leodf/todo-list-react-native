import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/tokens";

type TodoCardProps = {
  description: string;
  isDone?: boolean;
  onToggleDone?: () => void;
  onDelete?: () => void;
};

export default function TodoCard({
  description,
  isDone = false,
  onToggleDone,
  onDelete,
}: TodoCardProps) {
  return (
    <View
      style={
        isDone
          ? [styles.container, { borderColor: "transparent" }]
          : styles.container
      }
    >
      <TouchableOpacity
        onPress={onToggleDone}
        style={styles.radioButtonContainer}
      >
        <View style={styles.radioButton}>
          {isDone && (
            <View style={styles.radioButtonSelected}>
              <Feather name="check" color={colors.gray[100]} />
            </View>
          )}
        </View>
      </TouchableOpacity>
      <Text style={isDone ? styles.descriptionSelected : styles.description}>
        {description}
      </Text>
      <Pressable
        onPress={onDelete}
        style={({ pressed }) => [
          styles.deleteButton,
          { backgroundColor: pressed ? colors.gray[400] : "transparent" },
        ]}
      >
        {({ pressed }) =>
          pressed ? (
            <Feather
              name="trash-2"
              size={20}
              style={{ color: colors.danger }}
            />
          ) : (
            <Feather
              name="trash-2"
              size={20}
              style={{ color: colors.gray[300] }}
            />
          )
        }
      </Pressable>
    </View>
  );
}
