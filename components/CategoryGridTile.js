import React from 'react';
import {StyleSheet, Pressable, View, Text, Platform} from 'react-native';

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        onPress={onPress}
        style={({pressed}) => [
          styles.buttonStyles,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.titleStyles}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : null,
  },

  buttonStyles: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  titleStyles: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default CategoryGridTile;
