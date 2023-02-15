import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import FavouritesScreen from '../screens/FavouritesScreen';
import FavoritesContextProvider from '../store/context/favorites-context';
import {store} from '../store/redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function NestedDrawerComponent() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.headerBackground,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        sceneContainerStyle: {
          backgroundColor: Colors.background,
        },
        drawerContentStyle: {backgroundColor: Colors.background},
        headerTintColor: Colors.white,
        headerBackTitleVisible: true,
        drawerActiveBackgroundColor: Colors.headerBackground,
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.black,
        headerMode: 'float',
      }}>
      <Drawer.Screen
        name="AllCategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    //  <FavoritesContextProvider> CONTEXT
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CategoriesScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.headerBackground,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            cardStyle: {
              backgroundColor: Colors.background,
            },
            headerTintColor: Colors.white,
            headerBackTitleVisible: true,
            headerMode: 'float',
          }}>
          <Stack.Screen
            name="CategoriesScreen"
            component={NestedDrawerComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
            options={{headerShown: true, title: 'Receipe'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // </FavoritesContextProvider>
  );
};

export default MainStackNavigator;
