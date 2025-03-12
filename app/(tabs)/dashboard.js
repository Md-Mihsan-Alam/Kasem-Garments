import { Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import {View, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Image
        source={require('../../assets/images/logo.png')} 
        style={{ width: 200, height: 200, marginBottom: 20 }}
      /> */}
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});