import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Navigation';

export const createNavigationMock = (): NativeStackNavigationProp<
  RootStackParamList,
  'Home'
> => ({
  navigate: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(() => true),
  canGoBack: jest.fn(() => true),
  getId: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
  popTo: jest.fn(), 
  popToTop: jest.fn(),
  setParams: jest.fn(),
  setOptions: jest.fn(),
  navigateDeprecated: jest.fn(),
  preload: jest.fn(),
  setStateForNextRouteNamesChange: jest.fn(),
});
