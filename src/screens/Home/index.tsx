import { View, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Header from "@/components/Header";
import TodoHead from "@/components/TodoHead";
import TodoListEmpty from "@/components/TodoListEmpty";
import TodoCard from "@/components/TodoCard";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoDescription, setTodoDescription] = useState("");

  function handleTodoAdd() {
    if (todoDescription === "") {
      return Alert.alert(
        "Descrição vazia",
        "Adicione uma descrição para a sua tarefa!!"
      );
    }
    setTodos((prevState) => [...prevState, todoDescription]);
    setTodoDescription("");
  }

  return (
    <View style={styles.container}>
      <Header
        todoDescription={todoDescription}
        setTodoDescription={setTodoDescription}
        handleTodoAdd={handleTodoAdd}
      />
      <TodoHead />
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoCard description={item} />}
        ListEmptyComponent={<TodoListEmpty />}
      />
    </View>
  );
}
