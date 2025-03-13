import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { rS, vS, mS } from '@/style/responsive';

const StockCard = ({ productName, date, stockIn, stockOut, stockAvailable }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://png.pngtree.com/png-clipart/20231001/original/pngtree-three-cardboard-boxes-png-image_13027844.png' }} 
        style={styles.image}
      />
      <Text style={styles.title}>{productName}</Text>

      <View style={styles.infoRow}>
        <Icon name="calendar" size={18} color="#333" style={styles.icon} />
        <Text style={styles.text}>{date}</Text>
      </View>

      <View style={styles.infoRow}>
        <Icon name="cube" size={18} color="#333" style={styles.icon} />
        <Text style={styles.text}>স্টক ইনঃ {stockIn}</Text>
        <Icon name="cube" size={18} color="#333" style={[styles.icon, { marginLeft: 10 }]} />
        <Text style={styles.text}>স্টক আউটঃ {stockOut}</Text>
      </View>

      <View style={styles.infoRow}>
        <Icon name="cube" size={18} color="#333" style={styles.icon} />
        <Text style={styles.text}>স্টক রয়েছেঃ {stockAvailable}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 10,
    paddingHorizontal: mS(14),
    paddingVertical: mS(10),
    marginBottom: mS(14),
    backgroundColor: 'white',
  },
  image: {
    width: rS(40),
    height: vS(40),
    marginBottom: mS(5),
  },
  title: {
    fontSize: mS(18),
    fontWeight: '600',
    marginBottom: mS(8),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: mS(5),
    marginLeft: mS(4),
  },
  text: {
    fontSize: mS(14),
  },
  icon: {
    marginRight: mS(8),
  },
});

export default StockCard;