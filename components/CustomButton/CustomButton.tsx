import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import styles from './CustomButton.styles';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: ViewStyle; // Additional styles for the button
  textStyle?: TextStyle; // Additional styles for the text
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton, // Disabled button styling
        buttonStyle, // Custom styles
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
