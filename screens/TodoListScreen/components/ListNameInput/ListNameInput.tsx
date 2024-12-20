import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { COLORS } from '../../../../theme';
import styles from './ListNameInput.styles';

type ListNameInputProps = {
  listName: string;
  setListName: (text: string) => void;
  onSave: () => void;
  isNewList: boolean;
};

const ListNameInput: React.FC<ListNameInputProps> = ({
  listName,
  setListName,
  onSave,
  isNewList,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter List Name"
        placeholderTextColor={COLORS.gray500}
        value={listName}
        onChangeText={setListName}
      />
      <Button
        disabled={!listName.trim()}
        title={isNewList ? 'Save List Name' : 'Edit List Name'}
        onPress={onSave}
      />
    </View>
  );
};

export default ListNameInput;
