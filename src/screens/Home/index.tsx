import { View, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import Header from "@/components/Header";
import TodoHead from "@/components/TodoHead";
import TodoListEmpty from "@/components/TodoListEmpty";
import TodoCard from "@/components/TodoCard";

type Todo = {
  description: string;
  isDone?: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoDescription, setTodoDescription] = useState("");
  const [doneCount, setDoneCount] = useState(0);
  const [undoneCount, setUndoneCount] = useState(0);

  useEffect(() => {
    const countDoneTodo = todos.filter((todo) => todo.isDone).length;
    const countUndoneTodo = todos.length - countDoneTodo;
    setDoneCount(countDoneTodo);
    setUndoneCount(countUndoneTodo);
  }, [todos]);

  function handleTodoAdd() {
    if (todoDescription === "") {
      return Alert.alert(
        "Descrição vazia",
        "Adicione uma descrição para a sua tarefa!!"
      );
    }
    const todo: Todo = { description: todoDescription };
    setTodos((prevState) => [...prevState, todo]);
    setTodoDescription("");
  }

  function handleDone(description: string) {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.description === description
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  }

  return (
    <View style={styles.container}>
      <Header
        todoDescription={todoDescription}
        setTodoDescription={setTodoDescription}
        handleTodoAdd={handleTodoAdd}
      />
      <TodoHead countCreated={undoneCount} countDone={doneCount} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoCard
            key={item.description}
            description={item.description}
            isDone={item.isDone}
            onToggleDone={() => handleDone(item.description)}
          />
        )}
        ListEmptyComponent={<TodoListEmpty />}
      />
    </View>
  );
}
