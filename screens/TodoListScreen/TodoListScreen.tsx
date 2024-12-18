import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper'; // Expo provides this
import styles from './TodoListScreen.styles';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoList = {
  id: string;
  name: string;
  createdAt: string;
  items: Todo[];
};

export const TodoListScreen = ({ route, navigation }: any) => {
  const { isNewList } = route.params;
  const [allLists, setAllLists] = useState<TodoList[]>([]);
  const [selectedList, setSelectedList] = useState<TodoList | null>(null);
  const [newTodo, setNewTodo] = useState('');
  const [listName, setListName] = useState('');

  // Load all saved TODO lists
  useEffect(() => {
    const loadLists = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const listKeys = keys.filter((key) => key.startsWith('todoList_'));
        const storedLists = await AsyncStorage.multiGet(listKeys);

        const parsedLists: TodoList[] = storedLists
          .map(([key, value]) => (value ? JSON.parse(value) : null))
          .filter(Boolean);

        setAllLists(parsedLists);
      } catch (error) {
        console.error('Failed to load TODO lists:', error);
      }
    };
    loadLists();
  }, []);

  // Add a new TODO to the selected list
  const handleAddTodo = async () => {
    if (newTodo.trim() && selectedList) {
      const updatedList = {
        ...selectedList,
        items: [
          ...selectedList.items,
          { id: Date.now().toString(), title: newTodo, completed: false },
        ],
      };

      setSelectedList(updatedList);
      await AsyncStorage.setItem(
        `todoList_${updatedList.id}`,
        JSON.stringify(updatedList),
      );
      setNewTodo('');
    }
  };

  // Function to toggle "completed" state of a TODO item
  const handleToggleCompleted = async (todoId: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        items: selectedList.items.map((item) =>
          item.id === todoId ? { ...item, completed: !item.completed } : item,
        ),
      };

      setSelectedList(updatedList); // Update local state
      await AsyncStorage.setItem(
        `todoList_${updatedList.id}`,
        JSON.stringify(updatedList),
      ); // Update storage
    }
  };

  // Function to remove a TODO item
  const handleRemoveTodo = async (todoId: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        items: selectedList.items.filter((item) => item.id !== todoId),
      };

      setSelectedList(updatedList);
      await AsyncStorage.setItem(
        `todoList_${updatedList.id}`,
        JSON.stringify(updatedList),
      );
    }
  };

  // Save the list name
  const handleSaveListName = async () => {
    if (selectedList && listName.trim()) {
      const updatedList = { ...selectedList, name: listName };
      await AsyncStorage.setItem(
        `todoList_${updatedList.id}`,
        JSON.stringify(updatedList),
      );

      setAllLists((prev) =>
        prev.map((list) => (list.id === updatedList.id ? updatedList : list)),
      );
      setSelectedList(updatedList);
      setListName('');
    }
  };

  // Select an existing TODO list
  const handleSelectList = (list: TodoList) => {
    setSelectedList(list);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isNewList ? 'Create a New TODO List' : 'Select an Old TODO List'}
      </Text>

      {!isNewList && !selectedList && (
        <FlatList
          data={allLists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSelectList(item)}
            >
              <Text style={styles.buttonText}>
                {item.name.length > 20
                  ? item.name.substring(0, 20) + '...'
                  : item.name}{' '}
                - {item.createdAt}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text>No TODO lists found.</Text>}
        />
      )}

      {isNewList && !selectedList && (
        <Button
          title="Start a New List"
          onPress={async () => {
            const newList = {
              id: Date.now().toString(),
              name: 'Unnamed List',
              createdAt: new Date().toLocaleDateString(),
              items: [],
            };
            await AsyncStorage.setItem(
              `todoList_${newList.id}`,
              JSON.stringify(newList),
            );
            setSelectedList(newList);
          }}
        />
      )}
      {selectedList && (
        <>
          {/* List Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter List Name"
            value={listName}
            onChangeText={setListName}
          />
          <Button title="Save List Name" onPress={handleSaveListName} />

          {/* TODO List */}
          <FlatList
            data={selectedList.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.todoItem,
                  item.completed && styles.completedItem, // Green line if completed
                ]}
              >
                <View style={styles.todoContent}>
                  {/* Checkbox */}
                  {!isNewList && (
                    <Checkbox
                      status={item.completed ? 'checked' : 'unchecked'}
                      onPress={() => handleToggleCompleted(item.id)}
                    />
                  )}

                  {/* TODO Text */}
                  <Text
                    style={[
                      styles.todoText,
                      item.completed && styles.completedText,
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>

                {/* Remove Button */}
                {item.completed ? (
                  <Text style={styles.wellDoneText}>Well Done</Text>
                ) : (
                  <Button
                    title="Remove"
                    onPress={() => handleRemoveTodo(item.id)}
                    color="red"
                  />
                )}
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

          {/* Return to Home */}
          <Button
            title="Return to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </>
      )}
    </View>
  );
};
