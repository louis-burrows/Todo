import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import { COLORS } from '../theme';

describe('CustomButton', () => {
  it('renders correctly with required props', () => {
    const { getByText } = render(
      <CustomButton title="Test Button" onPress={() => {}} />,
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton title="Test Button" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton
        title="Test Button"
        onPress={onPressMock}
        disabled={true}
      />,
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('applies custom button and text styles', () => {
    const customButtonStyle = { backgroundColor: 'red' };
    const customTextStyle = { color: 'white' };

    const { getByTestId } = render(
      <CustomButton
        title="Test Button"
        onPress={() => {}}
        buttonStyle={customButtonStyle}
        textStyle={customTextStyle}
        testID="custom-button"
      />,
    );

    const buttonComponent = getByTestId('custom-button');
    const textComponent = buttonComponent.children[0];

    const flattenedButtonStyle = StyleSheet.flatten(
      buttonComponent.props.style,
    );
    expect(flattenedButtonStyle).toMatchObject(
      expect.objectContaining({
        backgroundColor: 'red',
      }),
    );

    const flattenedTextStyle = StyleSheet.flatten(textComponent.props.style);
    expect(flattenedTextStyle).toMatchObject(
      expect.objectContaining({
        color: 'white',
      }),
    );
  });

  it('applies disabled style when disabled', () => {
    const { getByTestId } = render(
      <CustomButton
        title="Test Button"
        onPress={() => {}}
        disabled={true}
        testID="custom-button"
      />,
    );

    const buttonComponent = getByTestId('custom-button');
    const flattenedStyle = buttonComponent.props.style;

    expect(flattenedStyle).toMatchObject(
      expect.objectContaining({
        backgroundColor: COLORS.gray400,
      }),
    );
  });
});
