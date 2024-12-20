import React from 'react';
import { Button } from 'react-native';

type StartNewListButtonProps = {
  onPress: () => void;
};

const StartNewListButton: React.FC<StartNewListButtonProps> = ({ onPress }) => {
  return <Button title="Start again" onPress={onPress} />;
};

export default StartNewListButton;
