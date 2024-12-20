import React from 'react';
import { Button } from 'react-native';
import { COLORS } from '../../../../theme';

type ReturnToHomeButtonProps = {
  onPress: () => void;
};

const ReturnToHomeButton: React.FC<ReturnToHomeButtonProps> = ({ onPress }) => {
  return <Button title="Return to Home" onPress={onPress} color={COLORS.primary} />;
};

export default ReturnToHomeButton;
