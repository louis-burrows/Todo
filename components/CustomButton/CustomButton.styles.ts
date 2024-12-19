import { StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../theme';

const styles = StyleSheet.create({
  button: {
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    marginVertical: SPACING.xs,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  disabledButton: {
    backgroundColor: COLORS.gray400,
  },
});

export default styles;
