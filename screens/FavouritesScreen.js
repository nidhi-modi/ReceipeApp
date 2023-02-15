import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealsList from '../components/MealsList';
import Colors from '../constants/Colors';
import {MEALS} from '../data/dummy-data';
import {FavoritesContext} from '../store/context/favorites-context';

const FavouritesScreen = () => {
  //const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  //const fvtMeal = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id));

  const fvtMeal = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  if (fvtMeal.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList listValue={fvtMeal} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default FavouritesScreen;
