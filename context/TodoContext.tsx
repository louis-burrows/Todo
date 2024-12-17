import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

type TodoContextType = {
  allLists: TodoList[];
  addNewList: () => Promise<TodoList>;
  updateList: (list: TodoList) => Promise<void>;
  loadLists: () => Promise<void>;
};

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allLists, setAllLists] = useState<TodoList[]>([]);

  // Load lists from AsyncStorage
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

  // Add a new list
  const addNewList = async (): Promise<TodoList> => {
    const newList: TodoList = {
      id: Date.now().toString(),
      name: 'New List',
      createdAt: new Date().toLocaleDateString(),
      items: [],
    };
    await AsyncStorage.setItem(`todoList_${newList.id}`, JSON.stringify(newList));
    setAllLists((prev) => [...prev, newList]);
    return newList;
  };

  // Update a list (e.g., rename, add items)
  const updateList = async (updatedList: TodoList) => {
    await AsyncStorage.setItem(`todoList_${updatedList.id}`, JSON.stringify(updatedList));
    setAllLists((prev) =>
      prev.map((list) => (list.id === updatedList.id ? updatedList : list))
    );
  };

  useEffect(() => {
    loadLists();
  }, []);

  return (
    <TodoContext.Provider value={{ allLists, addNewList, updateList, loadLists }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
