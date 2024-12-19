import React from 'react';
import { View, TextInput, Button } from 'react-native';
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
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add TODO" onPress={onAdd} />
    </View>
  );
};

export default AddTodoInput;
