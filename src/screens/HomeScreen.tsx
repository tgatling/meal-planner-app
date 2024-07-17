import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeList from '../components/RecipeList';

const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <RecipeList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E8CF',
  },
});

export default HomeScreen;