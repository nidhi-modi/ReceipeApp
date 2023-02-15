/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Colors from './constants/Colors';
import MainStackNavigator from './navigation/MainStackNavigator';


function App(): JSX.Element {
  

  return (
    
      <MainStackNavigator/>
       );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
});

export default App;
