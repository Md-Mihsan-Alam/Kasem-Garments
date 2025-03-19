import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { rS, vS, mS } from "@/style/responsive";
import LogoTitle from "@/components/inventory/LogoTitle";
import FilterButton from "../../../../components/common/Filter";
import ReturnTable from "../../../../components/inventory/ReturnStockTable";

const SaleStockTable = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <LogoTitle
                        title="ফেরত মালের স্টক"
                    />

                    <View style={styles.filterContainer}>

                        <FilterButton />
                    </View>


                    <ReturnTable />

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
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: mS(14),
        paddingVertical: mS(14),
    },
    cardContainer: {
        marginTop: mS(15),
    },
});

export default SaleStockTable;