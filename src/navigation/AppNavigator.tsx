import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import MealPlanScreen from '../screens/MealPlanScreen';
import RecipesScreen from '../screens/RecipesScreen';
import GroceryListScreen from '../screens/GroceryListScreen';
import SettingsScreen from '../screens/SettingsScreen';

type TabParamList = {
  Home: undefined;
  'Meal Plan': undefined;
  Recipes: undefined;
  'Grocery List': undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        // headerTitle: '',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Meal Plan':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Recipes':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'Grocery List':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: styles.tabBarActive.color,
        tabBarInactiveTintColor: styles.tabBarInactive.color,
        tabBarStyle: styles.tabBar,
        headerStyle: styles.header,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Meal Plan" component={MealPlanScreen} />
      <Tab.Screen name="Recipes" component={RecipesScreen} />
      <Tab.Screen name="Grocery List" component={GroceryListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#F2E8CF',
        borderTopWidth: 0,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      header: {
        backgroundColor: '#F2E8CF',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      headerTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTitleText: {
        color: '#3D405B',
        fontSize: 18,
        fontWeight: 'bold',
      },
    tabBarActive: {
      color: '#3D405B',
    },
    tabBarInactive: {
      color: '#81B29A',
    },
});

export default AppNavigator;