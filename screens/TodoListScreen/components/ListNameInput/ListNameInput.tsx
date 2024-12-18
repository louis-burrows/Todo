import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './ListNameInput.styles';

type ListNameInputProps = {
  listName: string;
  setListName: (text: string) => void;
  onSave: () => void;
};

const ListNameInput: React.FC<ListNameInputProps> = ({ listName, setListName, onSave }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter List Name"
        value={listName}
        onChangeText={setListName}
      />
      <Button title="Save List Name" onPress={onSave} />
    </View>
  );
};

export default ListNameInput;
