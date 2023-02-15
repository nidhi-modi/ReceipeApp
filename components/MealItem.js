import React from 'react';
import {View, Text, StyleSheet, Platform, Image, Pressable} from 'react-native';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import DetailItems from './DetailItems';

const MealItem = ({
  id,
  title,
  imageLink,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        onPress={() => navigation.navigate('MealDetailsScreen', {ids: id})}
        style={({pressed}) => [
          styles.buttonStyles,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={styles.innerContainer}>
          <Image style={styles.imageStyling} source={{uri: imageLink}} />
          <Text style={styles.titleStyling}>{title}</Text>
          <DetailItems
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: Colors.white,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : null,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  buttonStyles: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  titleStyling: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
    margin: 8,
  },

  imageStyling: {
    width: '100%',
    height: 200,
  },
});

export default MealItem;
