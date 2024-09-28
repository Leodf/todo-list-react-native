import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "@/components/Header";
import TodoHead from "@/components/TodoHead";
import TodoListEmpty from "@/components/TodoListEmpty";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoHead />
      <FlatList
        data={[]}
        renderItem={() => <Text>Ola</Text>}
        ListEmptyComponent={<TodoListEmpty />}
      />
    </View>
  );
}
