import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You'll need to install this
import { rS, vS, mS } from '@/style/responsive';

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
    paddingVertical: mS(8),
    paddingHorizontal: mS(12),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: mS(10),
    alignSelf: 'flex-start', 
  },
  icon: {
    marginRight: mS(8),
    fontSize: mS(20),
    color: '#333',
  },
  text: {
    fontSize: mS(16),
    color: '#333',
  },
});

export default FilterButton;