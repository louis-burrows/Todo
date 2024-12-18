import { StyleSheet } from 'react-native';
import { COLOURS } from '../../../../constants/colours';

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: COLOURS.secondary, // Using Deep Indigo
    marginTop: 20,
  },
});

export default styles;
