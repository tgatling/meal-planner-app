import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RecipeList from './src/components/RecipeList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RecipeList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});