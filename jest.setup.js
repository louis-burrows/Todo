jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.StyleSheet.create = (styles) => styles;
  return RN;
});
