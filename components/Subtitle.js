import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors';

const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: Colors.headerBackground,
  },

  subTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    color: Colors.headerBackground,
  },
});

export default Subtitle;
