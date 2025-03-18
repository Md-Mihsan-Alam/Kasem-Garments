import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { mS } from '@/style/responsive';

const TableComponent = () => {
  const data = [
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      stockIn: '১০০',
      stockOut: '২২',
      stockAvailable: '৮৮',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      stockIn: '১০০',
      stockOut: '২২',
      stockAvailable: '৮৮',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      stockIn: '১০০',
      stockOut: '২২',
      stockAvailable: '৮৮',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      stockIn: '১০০',
      stockOut: '২২',
      stockAvailable: '৮৮',
    },
    {
      date: '০৪/০৬/২০২৫',
      productName: 'পুরুষদের জন্য ফ্যাশনেবল টি-শার্ট',
      stockIn: '১০০',
      stockOut: '২২',
      stockAvailable: '৮৮',
    },
  ];

  return (
    <ScrollView horizontal={false}>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>তারিখ</Text>
          <Text style={styles.headerCell}>পণ্যের নাম</Text>
          <Text style={styles.headerCell}>স্টক ইন</Text>
          <Text style={styles.headerCell}>স্টক আউট</Text>
          <Text style={styles.headerCell}>স্টকে আছে</Text>
        </View>
        {data.map((item, index) => (
          <View style={styles.dataRow} key={index}>
            <Text style={styles.dataCell}>{item.date}</Text>
            <Text style={styles.dataCell}>{item.productName}</Text>
            <Text style={styles.dataCell}>{item.stockIn}</Text>
            <Text style={styles.dataCell}>{item.stockOut}</Text>
            <Text style={styles.dataCell}>{item.stockAvailable}</Text>
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
    flex: 1.2, // Increase the flex value of data cells
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

export default TableComponent;