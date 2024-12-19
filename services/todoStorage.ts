import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoListType } from '../types';

export const todoStorage = {
  async getAllLists(): Promise<TodoListType[]> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const listKeys = keys.filter((key) => key.startsWith('todoList_'));
      const storedLists = await AsyncStorage.multiGet(listKeys);
      return storedLists
        .map(([_, value]) => (value ? JSON.parse(value) : null))
        .filter(Boolean);
    } catch (error) {
      console.error('Failed to load TODO lists:', error);
      return [];
    }
  },

  async saveList(list: TodoListType): Promise<void> {
    try {
      await AsyncStorage.setItem(`todoList_${list.id}`, JSON.stringify(list));
    } catch (error) {
      console.error('Failed to save TODO list:', error);
    }
  },
};
