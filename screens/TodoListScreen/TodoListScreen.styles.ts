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
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 18,
  },
  completedItem: {
    backgroundColor: '#d4edda', // Light green background
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#155724', // Dark green text
  },
  wellDoneText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default styles;
