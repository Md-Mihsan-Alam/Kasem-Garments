import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { mS, rS } from '@/style/responsive';

const IconButton = ({ title, iconName, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Icon name={iconName} style={styles.icon} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: mS(10),
    marginTop: mS(20),
    width: rS(300),
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: mS(12),
    paddingHorizontal: mS(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: mS(12),
    fontSize: mS(18),
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: mS(16),
  },
});

export default IconButton;