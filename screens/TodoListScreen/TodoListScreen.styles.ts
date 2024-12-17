import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  todoItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  todoText: {
    fontSize: 18,
  },
  completedText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default styles;
