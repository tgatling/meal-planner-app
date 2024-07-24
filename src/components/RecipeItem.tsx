import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type RecipeItemProps = {
  name: string;
  description: string;
  onPress: () => void;
};

const RecipeItem: React.FC<RecipeItemProps> = ({
  name,
  description,
  onPress,
}) => (
  <TouchableOpacity style={styles.recipeItem} onPress={onPress}>
    <Text style={styles.recipeName}>{name}</Text>
    <Text style={styles.recipeDescription}>{description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  recipeItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#81B29A',
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

export default RecipeItem;
