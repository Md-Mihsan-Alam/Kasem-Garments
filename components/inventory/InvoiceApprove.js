import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InvoiceApproveSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Icon name="check" size={50} color="#4CAF50" />
      </View>
      <Text style={styles.approvedText}>Approved</Text>
      <Text style={styles.invoiceText}>Invoice</Text>

      <View style={styles.signaturesContainer}>
        <View style={styles.signatureLine}>
          <Text style={styles.signatureLabel}>ক্রেতার স্বাক্ষর</Text>
        </View>
        <View style={styles.signatureLine}>
          <Text style={styles.signatureLabel}>মেমো প্রস্তুতকারক</Text>
        </View>
      </View>

      <View style={styles.address}>
        <Text style={styles.addressText}>শহীদ ডা. শামসুল হক সড়ক, সৈয়দপুর, নীলফামারী</Text>
        <Text style={styles.addressText}>মোবাইলঃ ০১৭১২-০০০৬৯৯ • আরজুঃ ০১৭১২-০০০৬৯৯ • রওনকঃ ০১৭১২-০০০৬৯৯</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  approvedText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  invoiceText: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 20,
  },
  signaturesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  signatureLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    paddingBottom: 5,
  },
  signatureLabel: {
    fontSize: 14,
    color: '#757575',
  },
  address: {
    alignItems: 'center',
  },
  addressText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});

export default InvoiceApproveSection;