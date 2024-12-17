import React from 'react';
import { AppNavigator } from './navigation/AppNavigator';
import { TodoProvider } from './context/TodoContext';

export default function App() {
  return (
    <TodoProvider>
      <AppNavigator />
    </TodoProvider>
  );
}
