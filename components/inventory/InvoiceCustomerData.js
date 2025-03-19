import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { rS, vS, mS } from '@/style/responsive';

const InvoiceCustomerData = () => {
    const [serialNumber, setSerialNumber] = useState('৮৯৭৬');
    const [name, setName] = useState('মোহাম্মাদ কাসেম');
    const [date, setDate] = useState('০৪/০১/২০২৫');

    return (
        <View style={styles.container}>
            <View style={styles.inputDiv}>
                <Text style={styles.label}>ক্রমিক নং:</Text>
                <TextInput
                    style={styles.input}
                    value={serialNumber}
                    onChangeText={setSerialNumber}
                />
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.label}>নাম</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.label}>তারিখ</Text>
                <TextInput
                    style={styles.input}
                    value={date}
                    onChangeText={setDate}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputDiv: {
        marginBottom: mS(14),
    },
    label: {
        fontSize: mS(16),
        color: 'black',
        fontWeight: '500',
        marginBottom: mS(4),
    },
    input: {
        fontSize: mS(14),
        fontWeight: '600',
        borderWidth: 1,
        borderColor: '#ccc', 
        borderRadius: 6, 
        paddingHorizontal: mS(10),
        paddingVertical: mS(12), 
        width: '100%',
        backgroundColor: 'white',
    },
});

export default InvoiceCustomerData;
