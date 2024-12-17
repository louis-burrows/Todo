import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './TodoListScreen.styles';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const TodoListScreen = ({ route }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [oldLists] = useState<{ id: string; date: string; items: Todo[] }[]>([
    { id: '1', date: '2024-06-12', items: [{ id: '1', title: 'Old Task', completed: false }] },
    { id: '2', date: '2024-06-10', items: [] },
  ]);

  const isCreatingNewList = route?.params?.isNewList || false;

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now().toString(), title: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleSelectList = (listId: string) => {
    const selected = oldLists.find((list) => list.id === listId);
    if (selected) {
      setSelectedList(listId);
      setTodos(selected.items);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>

      {!isCreatingNewList && (
        <>
          <Text style={styles.subtitle}>Select an Old TODO List:</Text>
          {oldLists.map((list) => (
            <TouchableOpacity
              key={list.id}
              style={styles.dropdownItem}
              onPress={() => handleSelectList(list.id)}
            >
              <Text>{list.date}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}

      {selectedList || isCreatingNewList ? (
        <>
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
          <TextInput
            style={styles.input}
            placeholder="Add a new TODO"
            value={newTodo}
            onChangeText={setNewTodo}
          />
          <Button title="Add TODO" onPress={handleAddTodo} />
        </>
      ) : null}
    </View>
  );
};
