import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { rS, vS, mS } from "@/style/responsive";

const ReturnTable = () => {
  const data = [
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      quantity: '১০০',
      price: '৮৮০০',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      quantity: '১০০',
      price: '৮৮০০',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      quantity: '১০০',
      price: '৮৮০০',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      quantity: '১০০',
      price: '৮৮০০',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      quantity: '১০০',
      price: '৮৮০০',
    },
  ];

  return (
    <ScrollView horizontal={false}>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>তারিখ</Text>
          <Text style={styles.headerCell}>ফেরত পণ্যের নাম</Text>
          <Text style={styles.headerCell}>পরিমাণ</Text>
          <Text style={styles.headerCell}>মূল্য</Text>


        </View>
        {data.map((item, index) => (
          <View style={styles.dataRow} key={index}>
            <Text style={styles.dataCell}>{item.date}</Text>
            <Text style={styles.dataCell}>{item.productName}</Text>
            <Text style={styles.dataCell}>{item.quantity}</Text>
            <Text style={styles.dataCell}>{item.price}</Text>
          </View>
        ))}
        <View style={styles.bottomBorder} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    margin: mS(16),
    width: '100%', 
    alignSelf: 'center', 
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4caf50',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerCell: {
    flex: 1,
    padding: mS(10),
    fontWeight: '600',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#4caf50',
    color: 'white',
  },
  dataCell: {
    flex: 1.2, 
    padding: mS(10),
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default ReturnTable;