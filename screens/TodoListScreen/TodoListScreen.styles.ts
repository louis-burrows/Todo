import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  todoText: {
    fontSize: 18,
  },
  completedText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default styles;
