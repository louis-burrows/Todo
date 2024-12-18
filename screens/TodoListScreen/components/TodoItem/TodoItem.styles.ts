import { StyleSheet } from 'react-native';
import { COLOURS } from '../../../../constants/colours';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  completedContainer: {
    backgroundColor: COLOURS.success, // Lime Green for completed items
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: COLOURS.text,
    marginLeft: 10,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: COLOURS.secondary, // Deep Indigo for completed text
  },
  wellDoneText: {
    fontSize: 14,
    color: COLOURS.primary, // Vibrant Orange-Red
    fontWeight: 'bold',
  },
  completedCheckbox: {
    color: COLOURS.success, // Lime Green for completed checkbox
  },
});

export default styles;
