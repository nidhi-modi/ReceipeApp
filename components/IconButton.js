import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const IconButton = ({color, icon, onPress}) => {
  return (
    <View style={styles.viewMargin}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },

  viewMargin: {
    marginRight: 8,
  },
});

export default IconButton;
