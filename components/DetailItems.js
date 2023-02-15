import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailItems = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.detailsStyling, style]}>
      <Text style={[styles.detailsText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsStyling: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  detailsText: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});

export default DetailItems;
