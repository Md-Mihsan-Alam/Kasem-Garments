import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { rS, vS, mS } from '@/style/responsive';

const CustomButton = ({ title, onPress, otherStyles }) => {
  return (
    <TouchableOpacity style={[styles.button, otherStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, otherStyles]}>{title}</Text>
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
  buttonText: {
    color: 'white',         
    fontSize: mS(18),          
    fontWeight: 'bold',    
  },
});

export default CustomButton;