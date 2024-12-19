import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../../../theme';

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: SPACING.sm,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
  },
});

export default styles;
