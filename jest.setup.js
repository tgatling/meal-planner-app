import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/bottom-tabs', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return {
    createBottomTabNavigator: () => ({
      Navigator: ({ children }) => <View>{children}</View>,
      Screen: ({ name }) => <Text>{name}</Text>,
    }),
  };
});

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
}));