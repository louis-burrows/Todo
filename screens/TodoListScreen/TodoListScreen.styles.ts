import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, COLORS, SPACING, TYPOGRAPHY } from '../../theme';

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
  feedbackMessage: {
    textAlign: 'center',
    padding: SPACING.sm,
    marginTop: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
  },
  successMessage: {
    backgroundColor: COLORS.success + '20', // 20 is for opacity
    color: COLORS.success,
  },
  errorMessage: {
    backgroundColor: COLORS.danger + '20',
    color: COLORS.danger,
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.textSecondary,
    marginTop: SPACING.xl,
    fontStyle: 'italic',
  },
});

export default styles;
