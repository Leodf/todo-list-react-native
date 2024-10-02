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
      <Pressable onPress={onToggleDone} style={styles.radioButtonContainer}>
        {({ pressed }) => (
          <View
            style={[
              styles.radioButton,
              {
                borderColor: pressed ? colors.blueDark : colors.blue,
                backgroundColor: pressed
                  ? "rgba(30, 111, 159, 0.2)"
                  : "transparent",
              },
            ]}
          >
            {isDone && (
              <View
                style={[
                  styles.radioButtonSelected,
                  {
                    backgroundColor: pressed
                      ? colors.purple
                      : colors.purpleDark,
                  },
                ]}
              >
                <Feather name="check" color={colors.gray[100]} />
              </View>
            )}
          </View>
        )}
      </Pressable>
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
