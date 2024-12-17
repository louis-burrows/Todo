import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './HomeScreen.styles';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO Lists</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TodoList', { isNewList: true })}
      >
        <Text style={styles.buttonText}>Create a New TODO List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TodoList', { isNewList: false })}
      >
        <Text style={styles.buttonText}>See Old TODO Lists</Text>
      </TouchableOpacity>
    </View>
  );
};
