import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.gray300,
  },
  completedContainer: {
    backgroundColor: COLORS.gray100,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: SPACING.md,
  },
  text: {
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.textPrimary,
    marginLeft: SPACING.sm,
    flex: 1,
    flexWrap: 'wrap',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: COLORS.textSecondary,
  },
  wellDoneText: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.success,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  completedCheckbox: {
    color: COLORS.success,
  },
  removeButton: {
    color: COLORS.danger,
  },
});

export default styles;
