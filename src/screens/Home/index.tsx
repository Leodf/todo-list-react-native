import { View, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import Header from "@/components/Header";
import TodoHead from "@/components/TodoHead";
import TodoListEmpty from "@/components/TodoListEmpty";
import TodoCard from "@/components/TodoCard";

type Todo = {
  id: number;
  description: string;
  isDone?: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoDescription, setTodoDescription] = useState("");
  const [doneCount, setDoneCount] = useState(0);
  const [undoneCount, setUndoneCount] = useState(0);
  const [nextId, setNextId] = useState(1);

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
    const todo: Todo = { id: nextId, description: todoDescription };
    setTodos((prevState) => [...prevState, todo]);
    setTodoDescription("");
    setNextId((prevId) => prevId + 1);
  }

  function handleDone(id: number) {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoCard
            key={item.id}
            description={item.description}
            isDone={item.isDone}
            onToggleDone={() => handleDone(item.id)}
          />
        )}
        ListEmptyComponent={<TodoListEmpty />}
      />
    </View>
  );
}
