import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './TodoListScreen.styles';

// Import Components
import ListNameInput from './components/ListNameInput/ListNameInput';
import TodoList from './components/TodoList/TodoList';
import AddTodoInput from './components/AddTodoInput/AddTodoInput';
import ReturnToHomeButton from './components/ReturnToHomeButton/ReturnToHomeButton';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoListType = {
  id: string;
  name: string;
  createdAt: string;
  items: Todo[];
};

export const TodoListScreen = ({ route, navigation }: any) => {
  const { isNewList } = route.params;

  // State
  const [allLists, setAllLists] = useState<TodoListType[]>([]);
  const [selectedList, setSelectedList] = useState<TodoListType | null>(null);
  const [newTodo, setNewTodo] = useState('');
  const [listName, setListName] = useState('');

  // Load all saved TODO lists
  useEffect(() => {
    const loadLists = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const listKeys = keys.filter((key) => key.startsWith('todoList_'));
        const storedLists = await AsyncStorage.multiGet(listKeys);

        const parsedLists: TodoListType[] = storedLists
          .map(([key, value]) => (value ? JSON.parse(value) : null))
          .filter(Boolean);

        setAllLists(parsedLists);

        // If creating a new list
        if (isNewList && !selectedList) {
          const newList = {
            id: Date.now().toString(),
            name: 'Unnamed List',
            createdAt: new Date().toLocaleDateString(),
            items: [],
          };
          setSelectedList(newList);
        }
      } catch (error) {
        console.error('Failed to load TODO lists:', error);
      }
    };
    loadLists();
  }, [isNewList]);

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

  // Toggle completion of a TODO item
  const handleToggleCompleted = async (todoId: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        items: selectedList.items.map((item) =>
          item.id === todoId ? { ...item, completed: !item.completed } : item,
        ),
      };

      setSelectedList(updatedList);
      await AsyncStorage.setItem(
        `todoList_${updatedList.id}`,
        JSON.stringify(updatedList),
      );
    }
  };

  // Remove a TODO item
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

  // Handle selecting an old list
  const handleSelectList = (list: TodoListType) => {
    setSelectedList(list);
    setListName(list.name); // Set the name for editing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isNewList ? 'Create a New TODO List' : 'Select and Edit TODO List'}
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

      {selectedList && (
        <>
          {/* List Name Input */}
          <ListNameInput
            listName={listName}
            setListName={setListName}
            onSave={handleSaveListName}
          />

          {/* TODO List */}
          <TodoList
            items={selectedList.items}
            onToggleCompleted={handleToggleCompleted}
            onRemove={handleRemoveTodo}
          />

          {/* Add TODO Input */}
          <AddTodoInput
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            onAdd={handleAddTodo}
          />

          {/* Return to Home */}
          <ReturnToHomeButton onPress={() => navigation.navigate('Home')} />
        </>
      )}
    </View>
  );
};
