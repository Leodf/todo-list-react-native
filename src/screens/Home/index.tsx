import { View, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "@/components/Header";
import TodoHead from "@/components/TodoHead";
import TodoListEmpty from "@/components/TodoListEmpty";
import TodoCard from "@/components/TodoCard";

export default function Home() {
  const todos = [
    "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    "Estudar programação",
    "Ler um livro",
    "Organizar o escritório",
    "Responder emails",
    "Preparar uma refeição saudável",
    "Meditar por 10 minutos",
    "Fazer uma caminhada",
    "Assistir a uma palestra online",
    "Escrever no diário",
  ];

  return (
    <View style={styles.container}>
      <Header />
      <TodoHead />
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoCard description={item} />}
        ListEmptyComponent={<TodoListEmpty />}
      />
    </View>
  );
}
