import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#007BFF', // Default blue color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Gray color for disabled buttons
  },
});

export default styles;
