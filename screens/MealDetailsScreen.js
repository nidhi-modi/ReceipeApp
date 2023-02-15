import React, {useLayoutEffect, useContext} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import DetailItems from '../components/DetailItems';
import Colors from '../constants/Colors';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/favorite';

const MealDetailsScreen = ({navigation}) => {
  const route = useRoute();
  const catId = route.params.ids;
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  //const favoriteMealContext = useContext(FavoritesContext);

  const selectedItems = MEALS.find(mealItems => mealItems.id === catId);

  //const mealIsFavorite = favoriteMealContext.ids.includes(catId);
  const mealIsFavorite = favoriteMealIds.includes(catId);

  const headerButtonPressHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({id: catId}));
      //favoriteMealContext.removeFavorites(catId);
    } else {
      dispatch(addFavorite({id: catId}));
      //favoriteMealContext.addFavorites(catId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <Image
          source={{uri: selectedItems.imageUrl}}
          style={styles.imageStyling}
        />
        <Text style={styles.titleStyling}>{selectedItems.title}</Text>
        <DetailItems
          duration={selectedItems.duration}
          complexity={selectedItems.complexity}
          affordability={selectedItems.affordability}
          textStyle={styles.detailText}
        />
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedItems.ingredients} type={'Ingredients'} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedItems.steps} type={'Steps'} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageStyling: {
    width: '100%',
    height: 300,
  },

  titleStyling: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    margin: 8,
  },

  detailText: {
    color: Colors.redPink,
  },

  rootContainer: {
    marginBottom: 40,
  },
});

export default MealDetailsScreen;
