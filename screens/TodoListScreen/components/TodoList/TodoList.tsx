import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './TodoList.styles';
import TodoItem from '../TodoItem/TodoItem';

// Import Types
import { TodoType } from '../../../../types';

type TodoListProps = {
  items: TodoType[];
  onToggleCompleted: (id: string) => void;
  onRemove: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  items,
  onToggleCompleted,
  onRemove,
}) => {
  if (items.length === 0) {
    return <Text style={styles.emptyText}>No TODOs yet. Add something!</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem
          item={item}
          onToggleCompleted={onToggleCompleted}
          onRemove={onRemove}
        />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default TodoList;
