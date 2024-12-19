import { StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.sm,
    paddingHorizontal: SPACING.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: BORDER_RADIUS.sm,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.textPrimary,
  },
});

export default styles;
