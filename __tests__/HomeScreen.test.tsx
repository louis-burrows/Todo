import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { createNavigationMock } from '../__mocks__/navigationMock';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';

describe('HomeScreen', () => {
  const navigation = createNavigationMock();

  const route = {
    key: 'Home-key',
    name: 'Home',
  } as RouteProp<RootStackParamList, 'Home'>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with all elements', () => {
    const { getByText } = render(
      <HomeScreen navigation={navigation} route={route} />,
    );
    expect(getByText('TODO Lists')).toBeTruthy();
    expect(getByText('Create a New TODO List')).toBeTruthy();
    expect(getByText('See Old TODO Lists')).toBeTruthy();
  });

  it('navigates to TodoList with isNewList=true when Create button is pressed', () => {
    const { getByText } = render(
      <HomeScreen navigation={navigation} route={route} />,
    );

    fireEvent.press(getByText('Create a New TODO List'));
    expect(navigation.navigate).toHaveBeenCalledWith('TodoList', {
      isNewList: true,
    });
  });

  it('navigates to TodoList with isNewList=false when See Old Lists button is pressed', () => {
    const { getByText } = render(
      <HomeScreen navigation={navigation} route={route} />,
    );

    fireEvent.press(getByText('See Old TODO Lists'));
    expect(navigation.navigate).toHaveBeenCalledWith('TodoList', {
      isNewList: false,
    });
  });
});
