import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You'll need to install this

const FilterButton = () => {
  return (
    <View style={styles.button}>
      <Icon name="filter" style={styles.icon} />
      <Text style={styles.text}>ফিল্টার</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    alignSelf: 'flex-start', 
  },
  icon: {
    marginRight: 8,
    fontSize: 22,
    color: '#333',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default FilterButton;