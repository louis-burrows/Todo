import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: SPACING.md,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
    marginBottom: SPACING.sm,
    textAlign: 'center',
    color: COLORS.textPrimary,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    marginVertical: SPACING.xs,
    borderRadius: SPACING.sm,
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: TYPOGRAPHY.sizes.md,
    textAlign: 'center',
  },
  todoListContainer: {
    flex: 1,
  },
});

export default styles;
