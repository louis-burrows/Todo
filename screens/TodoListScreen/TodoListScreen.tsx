import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './TodoListScreen.styles';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const TodoListScreen = ({ route }: any) => {
  const { isNewList } = route.params;
  const [todos, setTodos] = useState<Todo[]>([]); // State for TODO items
  const [newTodo, setNewTodo] = useState(''); // State for new TODO input
  const storageKey = 'todoLists'; // Key to save/load data from AsyncStorage

  // Load TODO list from AsyncStorage
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem(storageKey);
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos));
        }
      } catch (error) {
        console.error('Failed to load TODOs:', error);
      }
    };
    loadTodos();
  }, []);

  // Save TODO list to AsyncStorage whenever it changes
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(storageKey, JSON.stringify(todos));
      } catch (error) {
        console.error('Failed to save TODOs:', error);
      }
    };
    saveTodos();
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now().toString(), title: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isNewList ? 'Create a New TODO List' : 'Edit TODO List'}
      </Text>

      {/* Input for adding new TODO */}
      <TextInput
        style={styles.input}
        placeholder="Enter a new TODO"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add TODO" onPress={handleAddTodo} />

      {/* Display the TODO items */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={item.completed ? styles.completedText : styles.todoText}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
