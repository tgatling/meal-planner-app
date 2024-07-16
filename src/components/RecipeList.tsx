import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Recipe = {
  id: string;
  name: string;
};

const MOCK_RECIPES: Recipe[] = [
  { id: '1', name: 'Spaghetti Carbonara' },
  { id: '2', name: 'Chicken Stir Fry' },
  { id: '3', name: 'Vegetable Soup' },
];

const RecipeList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>
      <FlatList
        data={MOCK_RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recipeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default RecipeList;