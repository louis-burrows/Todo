import React, { useState, useEffect } from 'react';

// Import Components
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ListNameInput from './components/ListNameInput/ListNameInput';
import TodoList from './components/TodoList/TodoList';
import AddTodoInput from './components/AddTodoInput/AddTodoInput';
import ReturnToHomeButton from './components/ReturnToHomeButton/ReturnToHomeButton';
import StartNewListButton from './components/StartNewListButton/StartNewListButton';
import styles from './TodoListScreen.styles';

// Import Types
import { TodoListType } from '../../types';

// Import Services
import { todoStorage } from '../../services/todoStorage';

export const TodoListScreen = ({ route, navigation }: any) => {
  const { isNewList } = route.params;

  // State
  const [allLists, setAllLists] = useState<TodoListType[]>([]);
  const [selectedList, setSelectedList] = useState<TodoListType | null>(null);
  const [newTodo, setNewTodo] = useState('');
  const [listName, setListName] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Load all saved TODO lists
  useEffect(() => {
    const loadLists = async () => {
      try {
        const parsedLists = await todoStorage.getAllLists();

        const sortedListsAlphabetically = parsedLists.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setAllLists(sortedListsAlphabetically);

        // If creating a new list
        if (isNewList && !selectedList) {
          const newList = {
            id: Date.now().toString(),
            name: 'Unnamed List',
            createdAt: new Date().toLocaleDateString('en-GB'),
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

  const handleSaveListName = async () => {
    if (selectedList && listName.trim()) {
      try {
        const updatedList = { ...selectedList, name: listName };
        await todoStorage.saveList(updatedList);
        setAllLists((prev) =>
          prev.map((list) => (list.id === updatedList.id ? updatedList : list)),
        );
        setSelectedList(updatedList);

        // Show success feedback
        setFeedbackMessage('List name saved successfully!');

        // Clear feedback after 2 seconds
        setTimeout(() => {
          setFeedbackMessage(null);
        }, 2000);
      } catch (error) {
        // Show error feedback
        setFeedbackMessage('Failed to save list name. Please try again.');
        setTimeout(() => {
          setFeedbackMessage(null);
        }, 2000);
      }
    }
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() && selectedList) {
      const updatedList = {
        ...selectedList,
        items: [
          ...selectedList.items,
          { id: Date.now().toString(), title: newTodo, completed: false },
        ],
      };

      await todoStorage.saveList(updatedList);
      setSelectedList(updatedList);
      setNewTodo('');
    }
  };

  const handleToggleCompletionOfTodo = async (todoId: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        items: selectedList.items.map((item) =>
          item.id === todoId ? { ...item, completed: !item.completed } : item,
        ),
      };

      await todoStorage.saveList(updatedList);
      setSelectedList(updatedList);
    }
  };

  const handleRemoveTodo = async (todoId: string) => {
    if (selectedList) {
      const updatedList = {
        ...selectedList,
        items: selectedList.items.filter((item) => item.id !== todoId),
      };

      await todoStorage.saveList(updatedList);
      setSelectedList(updatedList);
    }
  };

  const handleSelectListOfTodos = (list: TodoListType) => {
    setSelectedList(list);
    setListName(list.name); // Display list name for editing
  };

  const handleStartNewList = () => {
    const newList = {
      id: Date.now().toString(),
      name: 'Unnamed List',
      createdAt: new Date().toLocaleDateString('en-GB'),
      items: [],
    };
    setSelectedList(newList);
    setListName('');
    setNewTodo('');
    setFeedbackMessage(null);
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
              onPress={() => handleSelectListOfTodos(item)}
            >
              <Text style={styles.buttonText}>
                {item.name.length > 30
                  ? item.name.substring(0, 30) + '...'
                  : item.name}{' '}
                - {item.createdAt}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No TODO lists found.</Text>
          }
        />
      )}

      {selectedList && (
        <>
          <ListNameInput
            isNewList={isNewList}
            listName={listName}
            setListName={setListName}
            onSave={handleSaveListName}
          />

          {feedbackMessage && (
            <Text
              style={[
                styles.feedbackMessage,
                feedbackMessage.includes('Failed')
                  ? styles.errorMessage
                  : styles.successMessage,
              ]}
            >
              {feedbackMessage}
            </Text>
          )}

          <View style={styles.todoListContainer}>
            <TodoList
              items={selectedList.items}
              onToggleCompleted={handleToggleCompletionOfTodo}
              onRemove={handleRemoveTodo}
            />
          </View>

          <AddTodoInput
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            onAdd={handleAddTodo}
          />

          <View style={styles.buttonContainer}>
            <ReturnToHomeButton onPress={() => navigation.navigate('Home')} />
            <StartNewListButton onPress={handleStartNewList} />
          </View>
        </>
      )}
    </View>
  );
};
