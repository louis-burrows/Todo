import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define your stack's route parameters
export type RootStackParamList = {
  Home: undefined; // No parameters for the Home screen
  TodoList: { isNewList: boolean }; // Parameters for the TodoList screen
};

// Define a reusable type for screen props
export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
