import React from 'react';
import { render } from '@testing-library/react-native/pure';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../src/navigation/AppNavigator';

// Mock the screens
jest.mock('../../src/screens/HomeScreen', () => 'HomeScreen');
jest.mock('../../src/screens/MealPlanScreen', () => 'MealPlanScreen');
jest.mock('../../src/screens/RecipesScreen', () => 'RecipesScreen');
jest.mock('../../src/screens/GroceryListScreen', () => 'GroceryListScreen');
jest.mock('../../src/screens/SettingsScreen', () => 'SettingsScreen');

describe('AppNavigator', () => {
  it('renders all tab names', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    // Check if all tab names are rendered
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Meal Plan')).toBeTruthy();
    expect(getByText('Recipes')).toBeTruthy();
    expect(getByText('Grocery List')).toBeTruthy();
    expect(getByText('Settings')).toBeTruthy();
  });

  it('has correct number of tabs', () => {
    const { getAllByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    const tabNames = ['Home', 'Meal Plan', 'Recipes', 'Grocery List', 'Settings'];
    const tabs = tabNames.flatMap(name => getAllByText(name));
    expect(tabs).toHaveLength(5);
  });
});