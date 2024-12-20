import React from 'react';
import { View, Text } from 'react-native';
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
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />

      <CustomButton
        title="Check Old TODO Lists"
        onPress={() => navigation.navigate('TodoList', { isNewList: false })}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};
