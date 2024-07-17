import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RecipeItem from './RecipeItem';

type Recipe = {
  id: string;
  name: string;
  description: string;
};

const MOCK_RECIPES: Recipe[] = [
  { id: '1', name: 'Green Smoothie Bowl', description: 'Packed with spinach, kale, and tropical fruits' },
  { id: '2', name: 'Grilled Chicken Salad', description: 'Lean protein with a mix of fresh vegetables' },
  { id: '3', name: 'Vegetable Stir Fry', description: 'Colorful veggies in a light, flavorful sauce' },
];

const RecipeList: React.FC = () => {
  const renderItem = ({ item }: { item: Recipe }) => (
    <RecipeItem 
      name={item.name} 
      description={item.description} 
      onPress={() => console.log(`Pressed ${item.name}`)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Inspirations</Text>
      <FlatList
        data={MOCK_RECIPES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E8CF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#2E7D32',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  recipeItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333333',
  },
  recipeDescription: {
    fontSize: 14,
    color: '#666666',
  },
});

export default RecipeList;