import React from 'react';
import { View, Button } from 'react-native';
import styles from './ReturnToHomeButton.styles';

type ReturnToHomeButtonProps = {
  onPress: () => void;
};

const ReturnToHomeButton: React.FC<ReturnToHomeButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Return to Home" onPress={onPress} />
    </View>
  );
};

export default ReturnToHomeButton;
