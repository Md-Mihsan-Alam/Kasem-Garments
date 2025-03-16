// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const products = [
//   { id: 1, name: 'শার্ট', price: 200, quantity: 1, total: 200 },
//   { id: 2, name: 'প্যান্ট', price: 300, quantity: 1, total: 300 },
//   { id: 3, name: 'টি-শার্ট', price: 400, quantity: 1, total: 400 },
//   { id: 4, name: 'টি-প্যান্ট', price: 500, quantity: 1, total: 500 },
//   { id: 5, name: 'টি-টি-শার্ট', price: 600, quantity: 1, total: 600 },
//   { id: 6, name: 'টি-টি-প্যান্ট', price: 700, quantity: 1, total: 700 },
// ];

// const initialRows = [
//   { id: 1, product: null, price: 0, quantity: 0, total: 0 },
//   { id: 2, product: null, price: 0, quantity: 0, total: 0 },
//   { id: 3, product: null, price: 0, quantity: 0, total: 0 },
//   { id: 4, product: null, price: 0, quantity: 0, total: 0 },
//   { id: 5, product: null, price: 0, quantity: 0, total: 0 },
//   { id: 6, product: null, price: 0, quantity: 0, total: 0 },
// ];

// const InvoiceTable = () => {
//   const [rows, setRows] = useState(initialRows);

//   const handleProductChange = (productId, rowIndex) => {
//     const updatedRows = rows.map((row, index) => {
//       if (index === rowIndex) {
//         const selectedProduct = products.find((p) => p.id === productId);
//         return { ...row, product: selectedProduct, price: selectedProduct.price, quantity: 1 };
//       }
//       return row;
//     });
//     setRows(updatedRows);
//   };

//   const handleQuantityChange = (quantity, rowIndex) => {
//     const updatedRows = rows.map((row, index) => {
//       if (index === rowIndex) {
//         return { ...row, quantity: parseInt(quantity) || 0 };
//       }
//       return row;
//     });
//     setRows(updatedRows);
//   };

//   const calculateTotal = (rowIndex) => {
//     const row = rows[rowIndex];
//     return row.price * row.quantity;
//   };

//   const calculateGrandTotal = () => {
//     return rows.reduce((acc, row) => acc + row.price * row.quantity, 0);
//   };

//   return (
//     <View style={styles.table}>
//       <View style={styles.headerRow}>
//         <Text style={styles.headerCell}>নং</Text>
//         <Text style={styles.headerCell}>বিবরণ</Text>
//         <Text style={styles.headerCell}>মূল্য</Text>
//         <Text style={styles.headerCell}>পরিমাণ</Text>
//         <Text style={styles.headerCell}>মোট</Text>
//       </View>
//       {rows.map((row, index) => (
//         <View style={styles.row} key={row.id}>
//           <Text style={styles.cell}>{index + 1}</Text>
//           <View style={styles.productCell}>
//             <Text style={styles.productName}>
//               {row.product ? row.product.name : 'পণ্য নির্বাচন করুন'}
//             </Text>
//             <Picker
//               selectedValue={row.product ? row.product.id : null}
//               style={styles.picker}
//               onValueChange={(itemValue) => handleProductChange(itemValue, index)}
//             >
//               <Picker.Item label="পণ্য নির্বাচন করুন" value={null} />
//               {products.map((product) => (
//                 <Picker.Item
//                   key={product.id}
//                   label={product.name}
//                   value={product.id}
//                 />
//               ))}
//             </Picker>
//           </View>
//           <Text style={styles.cell}>{row.price} টাকা</Text>
//           <TextInput
//             style={styles.quantityInput}
//             value={row.quantity.toString()}
//             onChangeText={(text) => handleQuantityChange(text, index)}
//           />
//           <Text style={styles.cell}>{calculateTotal(index)} টাকা</Text>
//         </View>
//       ))}
//       <View style={styles.totalRow}>
//         <View style={styles.buttons}>
//           <TouchableOpacity style={styles.button}>
//             <View style={styles.plusiconContainer}>
//               <Icon name="plus" style={styles.buttonIcon} />
//             </View>
//             <Text style={styles.buttonText}>নতুন পণ্য</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button}>
//             <View style={styles.plusiconContainer}>
//               <Icon name="plus" style={styles.buttonIcon} />
//             </View>
//             <Text style={styles.buttonText}>ফেরত পণ্য</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button}>
//             <View style={styles.plusiconContainer}>
//               <Icon name="plus" style={styles.buttonIcon} />
//             </View>
//             <Text style={styles.buttonText}>বাকির হিসাব</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.totalContainer}>
//           <Text style={styles.totalLabel}>সর্বমোট</Text>
//         </View>
//         <View style={styles.totalValueContainer}>
//           <Text style={styles.totalValue}>{calculateGrandTotal()} টাকা</Text>
//         </View>
//       </View>

//       <View style={styles.AccountContainer}>
//         <View style={styles.AccountLabelContainer}>
//           <Text style={styles.AccountLabel}>পূর্বের বাকি</Text>
//           <Text style={styles.AccountValue}>১০০০ টাকা</Text>
//         </View>

//         {/* <View style={styles.AccountValueContainer}> */}
//           {/* <Text style={styles.AccountLabel}>জমা</Text> */}
//           {/* <Text style={styles.AccountLabel}>কথায়</Text> */}
//           {/* <Text style={styles.AccountLabel}>বাকি</Text> */}
//           {/* <Text style={styles.AccountValue}>৯০০০ টাকা</Text> */}
//           {/* <Text style={styles.AccountValue}>৩০০০ টাকা</Text> */}
//           {/* <Text style={styles.AccountValue}>তিন হাজার টাকা মাত্র</Text> */}

//         {/* </View> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   table: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     width: '100%',
//     overflow: 'hidden',
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: '#4caf50',
//     borderWidth: 1,
//     borderColor: '#4caf50',
//   },
//   headerCell: {
//     flex: 1,
//     padding: 10,
//     fontWeight: '600',
//     textAlign: 'center',
//     color: 'white',
//     borderWidth: 1,
//     borderColor: '#4caf50',
//   },
//   row: {
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   cell: {
//     flex: 1,
//     padding: 10,
//     textAlign: 'left',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   productCell: {
//     flex: 2,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   productName: {
//     flex: 1,
//     padding: 10,
//     textAlign: 'center',
//   },
//   picker: {
//     flex: 1,
//     width: '100%',
//   },
//   quantityInput: {
//     flex: 1,
//     padding: 5,
//     margin: 5,
//     textAlign: 'center',
//     borderColor: '#ddd',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   totalLabel: {
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   totalValue: {
//     fontWeight: 'bold',
//   },
//   buttons: {
//     height: '100%',
//     width: '45%',
//     alignItems: 'flex-start',
//     flexDirection: 'column',
//     borderRightWidth: 1,
//     borderColor: '#ddd',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   button: {
//     width: 120,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     backgroundColor: 'white',
//   },
//   buttonText: {
//     color: 'black',
//   },
//   plusiconContainer: {
//     backgroundColor: '#4caf50',
//     height: 25,
//     width: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 50,
//     marginTop: 2,
//     marginRight: 5,
//     marginBottom: 2,
//   },
//   buttonIcon: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   totalContainer: {
//     height: '100%',
//     width: '30%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     borderRightWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//   },
//   totalValueContainer: {
//     width: '25%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     padding: 10,
//   },
//   AccountContainer: {
//     // height: '100%',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     padding: 10,
//   },
//   AccountLabelContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     paddingHorizontal: 5,
//   },
//   AccountLabel: {
//     marginTop: 5,
//     fontWeight: '600',
//     width: '50%',
//     borderRightWidth: 1,
//     borderColor: '#ddd',

//   },
//   AccountValueContainer: {
//     alignItems: 'flex-end',
//     paddingHorizontal: 5,
//   },
//   AccountValue: {
//     marginTop: 5,
//     fontWeight: '600',
//   },

// });

// export default InvoiceTable;



import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    // borderRadius: 8,
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
    padding: 10,
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
    padding: 10,
    textAlign: 'left',
    borderWidth: 1,
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
    padding: 10,
    textAlign: 'center',
  },
  picker: {
    flex: 1,
    width: '100%',
  },
  quantityInput: {
    flex: 1,
    padding: 5,
    margin: 5,
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
    marginRight: 10,
    fontSize: 15,
  },
  totalValue: {
    fontSize: 15,
    fontWeight: '600',
  },
  buttons: {
    height: '100%',
    width: '45%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRightWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  plusiconContainer: {
    backgroundColor: '#4caf50',
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 2,
    marginRight: 5,
    marginBottom: 2,
  },
  buttonIcon: {
    color: 'white',
    fontSize: 14,
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
    padding: 10,
  },
  totalValueContainer: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  accountLabel: {
    flex: 1,
    textAlign: 'left',
    fontSize: 15,
    paddingRight: 10,
  },
  accountValue: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    paddingLeft: 10,
  },
  middleLine: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10, 
  },
});

export default InvoiceTable;