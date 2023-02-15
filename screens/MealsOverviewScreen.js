import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList';

const MealsOverviewScreen = ({navigation}) => {
  const route = useRoute();
  const categoriesId = route.params.categoryId;

  const displayMeals = MEALS.filter(mealItems => {
    return mealItems.categoryIds.indexOf(categoriesId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoriesId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoriesId, navigation]);

  return <MealsList listValue={displayMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsOverviewScreen;
