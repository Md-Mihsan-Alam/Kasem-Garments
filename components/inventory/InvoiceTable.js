import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rS, vS, mS } from '@/style/responsive';

const products = [
  { id: 1, name: 'শার্ট', price: 200, quantity: 1, total: 200 },
  { id: 2, name: 'প্যান্ট', price: 300, quantity: 1, total: 300 },
  { id: 3, name: 'টি-শার্ট', price: 400, quantity: 1, total: 400 },
  { id: 4, name: 'টি-প্যান্ট', price: 500, quantity: 1, total: 500 },
  { id: 5, name: 'টি-টি-শার্ট', price: 600, quantity: 1, total: 600 },
  { id: 6, name: 'টি-টি-প্যান্ট', price: 700, quantity: 1, total: 700 },
];

const initialRows = [
  { id: 1, product: null, price: 0, quantity: 0, total: 0 },
  { id: 2, product: null, price: 0, quantity: 0, total: 0 },
  { id: 3, product: null, price: 0, quantity: 0, total: 0 },
  { id: 4, product: null, price: 0, quantity: 0, total: 0 },
  { id: 5, product: null, price: 0, quantity: 0, total: 0 },
  { id: 6, product: null, price: 0, quantity: 0, total: 0 },
];

const InvoiceTable = () => {
  const [rows, setRows] = useState(initialRows);

  const handleProductChange = (productId, rowIndex) => {
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        const selectedProduct = products.find((p) => p.id === productId);
        return { ...row, product: selectedProduct, price: selectedProduct.price, quantity: 1 };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleQuantityChange = (quantity, rowIndex) => {
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, quantity: parseInt(quantity) || 0 };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const calculateTotal = (rowIndex) => {
    const row = rows[rowIndex];
    return row.price * row.quantity;
  };

  const calculateGrandTotal = () => {
    return rows.reduce((acc, row) => acc + row.price * row.quantity, 0);
  };

  return (
    <View style={styles.table}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>নং</Text>
        <Text style={styles.headerCell}>বিবরণ</Text>
        <Text style={styles.headerCell}>মূল্য</Text>
        <Text style={styles.headerCell}>পরিমাণ</Text>
        <Text style={styles.headerCell}>মোট</Text>
      </View>
      {rows.map((row, index) => (
        <View style={styles.row} key={row.id}>
          <Text style={styles.cell}>{index + 1}</Text>
          <View style={styles.productCell}>
            <Text style={styles.productName}>
              {row.product ? row.product.name : 'পণ্য নির্বাচন করুন'}
            </Text>
            <Picker
              selectedValue={row.product ? row.product.id : null}
              style={styles.picker}
              onValueChange={(itemValue) => handleProductChange(itemValue, index)}
            >
              <Picker.Item label="পণ্য নির্বাচন করুন" value={null} />
              {products.map((product) => (
                <Picker.Item
                  key={product.id}
                  label={product.name}
                  value={product.id}
                />
              ))}
            </Picker>
          </View>
          <Text style={styles.cell}>{row.price} টাকা</Text>
          <TextInput
            style={styles.quantityInput}
            value={row.quantity.toString()}
            onChangeText={(text) => handleQuantityChange(text, index)}
          />
          <Text style={styles.cell}>{calculateTotal(index)} টাকা</Text>
        </View>
      ))}
      <View style={styles.totalRow}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.plusiconContainer}>
              <Icon name="plus" style={styles.buttonIcon} />
            </View>
            <Text style={styles.buttonText}>নতুন পণ্য</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.plusiconContainer}>
              <Icon name="plus" style={styles.buttonIcon} />
            </View>
            <Text style={styles.buttonText}>ফেরত পণ্য</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.plusiconContainer}>
              <Icon name="plus" style={styles.buttonIcon} />
            </View>
            <Text style={styles.buttonText}>বাকির হিসাব</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>সর্বমোট</Text>
        </View>
        <View style={styles.totalValueContainer}>
          <Text style={styles.totalValue}>{calculateGrandTotal()} টাকা</Text>
        </View>
      </View>

        <View style={styles.accountRow}>
          <Text style={styles.accountLabel}>পূর্বের বাকি</Text>
          <Text style={styles.accountValue}>১,০০০ টাকা</Text>
        </View>
        <View style={styles.accountRow}>
          <Text style={styles.accountLabel}>জমা</Text>
          <Text style={styles.accountValue}>৯,০০০ টাকা</Text>
        </View>
        <View style={styles.accountRow}>
          <Text style={styles.accountLabel}>বাকি</Text>
          <Text style={styles.accountValue}>৩,০০০ টাকা</Text>
        </View>
        <View style={styles.accountRow}>
          <Text style={styles.accountLabel}>কথায়</Text>
          <Text style={styles.accountValue}>তিন হাজার টাকা মাত্র</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4caf50',
    borderWidth: 1,
    borderColor: '#4caf50',
  },
  headerCell: {
    flex: 1,
    fontSize: mS(14),
    padding: mS(8),
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    borderWidth: 1,
    borderColor: '#4caf50',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: mS(8),
    textAlign: 'left',
    borderWidth: 1,
    fontSize: mS(14),
    borderColor: '#ddd',
  },
  productCell: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productName: {
    flex: 1,
    fontSize: mS(14),
    padding: mS(6),
    textAlign: 'center',
  },
  picker: {
    flex: 1,
    width: '100%',
  },
  quantityInput: {
    flex: 1,
    padding: mS(5),
    margin: mS(5),
    fontSize: mS(15),
    textAlign: 'center',
    borderColor: '#ddd',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  totalLabel: {
    fontWeight: '600',
    marginRight: mS(10),
    fontSize: mS(15),
  },
  totalValue: {
    fontSize: mS(15),
    fontWeight: '600',
  },
  buttons: {
    height: '100%',
    width: '45%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRightWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: mS(10),
    paddingVertical: mS(5),
  },
  button: {
    width: rS(120),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: mS(10),
    paddingVertical: mS(5),
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: mS(15),
    fontWeight: '500',
    color: 'black',
  },
  plusiconContainer: {
    backgroundColor: '#4caf50',
    height: mS(25),
    width: mS(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mS(50),
    marginTop: mS(2),
    marginRight: mS(5),
    marginBottom: mS(2),
  },
  buttonIcon: {
    color: 'white',
    fontSize: mS(14),
    fontWeight: '500',
  },
  totalContainer: {
    height: '100%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRightWidth: 1,
    borderColor: '#ddd',
    padding: mS(10),
  },
  totalValueContainer: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: mS(10),
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: mS(8),
    paddingHorizontal: mS(12),
  },
  accountLabel: {
    flex: 1,
    textAlign: 'left',
    fontSize: mS(14),
    paddingRight: mS(10),
  },
  accountValue: {
    flex: 1,
    textAlign: 'right',
    fontSize: mS(14),
    paddingLeft: mS(10),
  },
  middleLine: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginVertical: mS(10), 
  },
});

export default InvoiceTable;