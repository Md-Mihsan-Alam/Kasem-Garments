import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { rS, vS, mS } from '@/style/responsive';
import InvoiceHeader from '../../components/inventory/InvoiceHeader';
import InvoiceCustomerData from '../../components/inventory/InvoiceCustomerData';
import InvoiceTable from '../../components/inventory/InvoiceTable';
import InvoiceApproveSection from '../../components/inventory/InvoiceApprove';

const Invoice = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <InvoiceHeader />
                    <View style={styles.customerData}>
                        <InvoiceCustomerData />
                    </View>

                    <View>
                        <InvoiceTable />
                    </View>

                    <InvoiceApproveSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flexGrow: mS(1),
        paddingBottom: mS(20),
    },
    container: {
        paddingHorizontal: mS(16),
        paddingVertical: mS(10),
        width: "100%",
    },
    customerData: {
        marginTop: mS(20),
        flexDirection: 'row',

        // alignItems: 'center',
        // justifyContent: 'space-between',
    },
});

export default Invoice;