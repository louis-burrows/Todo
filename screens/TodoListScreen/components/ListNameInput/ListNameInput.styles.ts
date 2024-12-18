import { StyleSheet } from 'react-native';
import { COLOURS } from '../../../../constants/colours'; 

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: COLOURS.secondary, // Using Deep Indigo
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: COLOURS.text, // Using Text colour
  },
});

export default styles;
