import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecipeList from '../components/RecipeList';

const RecipesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <RecipeList />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EDF2E8',
    },
  });
  

export default RecipesScreen;
