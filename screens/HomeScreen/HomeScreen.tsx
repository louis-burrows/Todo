import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './HomeScreen.styles';

// Import Types
import { NavigationProps } from '../../types/Navigation';

export const HomeScreen: React.FC<NavigationProps<'Home'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO Lists</Text>

      <CustomButton
        title="Create a New TODO List"
        onPress={() => navigation.navigate('TodoList', { isNewList: true })}
        buttonStyle={styles.button} // Pass the existing button style
        textStyle={styles.buttonText} // Pass the existing text style
      />

      <CustomButton
        title="See Old TODO Lists"
        onPress={() => navigation.navigate('TodoList', { isNewList: false })}
        buttonStyle={styles.button} // Pass the existing button style
        textStyle={styles.buttonText} // Pass the existing text style
      />
    </View>
  );
};
