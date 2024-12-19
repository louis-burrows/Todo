import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';
import { TYPOGRAPHY } from './typography';

export const commonStyles = StyleSheet.create({
  // Container styles
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },

  // Button styles
  button: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: SPACING.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray400,
  },
  buttonDanger: {
    backgroundColor: COLORS.danger,
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: TYPOGRAPHY.weights.medium,
  },

  // Input styles
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray300,
    borderRadius: SPACING.sm,
    padding: SPACING.md,
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.textPrimary,
  },

  // Text styles
  title: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.medium,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
});
