import React from 'react';
import { View, Text, Button } from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from './TodoItem.styles';

// Import Types
import { TodoType } from '../../../../types';

type TodoItemProps = {
  item: TodoType;
  onToggleCompleted: (id: string) => void;
  onRemove: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onToggleCompleted,
  onRemove,
}) => {
  return (
    <View
      style={[styles.container, item.completed && styles.completedContainer]}
    >
      <View style={styles.content}>
        {/* Checkbox */}
        <Checkbox
          status={item.completed ? 'checked' : 'unchecked'}
          onPress={() => onToggleCompleted(item.id)}
          color={item.completed ? styles.completedCheckbox.color : undefined}
        />

        {/* TODO Text */}
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {item.title}
        </Text>
      </View>

      {/* Remove Button or Well Done */}
      {item.completed ? (
        <Text style={styles.wellDoneText}>Well Done</Text>
      ) : (
        <Button title="Remove" onPress={() => onRemove(item.id)} color="red" />
      )}
    </View>
  );
};

export default TodoItem;
