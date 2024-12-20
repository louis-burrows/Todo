import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { COLORS } from '../../../../theme';
import styles from './AddTodoInput.styles';

type AddTodoInputProps = {
  newTodo: string;
  setNewTodo: (text: string) => void;
  onAdd: () => void;
};

const AddTodoInput: React.FC<AddTodoInputProps> = ({
  newTodo,
  setNewTodo,
  onAdd,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new TODO"
        placeholderTextColor={COLORS.gray500}
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add TODO" onPress={onAdd} disabled={!newTodo.trim()} />
    </View>
  );
};

export default AddTodoInput;
