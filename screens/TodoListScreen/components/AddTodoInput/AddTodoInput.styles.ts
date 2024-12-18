import { StyleSheet } from 'react-native';
import { COLOURS } from '../../../../constants/colours';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOURS.secondary, // Deep Indigo
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
    color: COLOURS.text, // Text color
  },
});

export default styles;
