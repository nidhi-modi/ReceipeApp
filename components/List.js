import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

var index = 1;

const List = ({data, type}) => {
  useEffect(() => {
    index = 1;
  }, [index]);

  return data.map(dataPoints => (
    <View key={dataPoints} style={styles.listItem}>
      {type === 'Ingredients' ? (
        <Text style={styles.textStyling}>{`\u25AA ${dataPoints}`}</Text>
      ) : (
        <Text style={styles.textStyling}>
          <Text style={styles.numnberBullet}>{index++}.</Text> {dataPoints}
        </Text>
      )}
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    backgroundColor: Colors.listBackground,
    marginVertical: 6,
    marginHorizontal: 24,
    paddingVertical: 8,
  },

  textStyling: {
    paddingLeft: 10,
  },

  numnberBullet: {
    fontWeight: 'bold',
  },
});

export default List;
