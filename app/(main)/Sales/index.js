import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { rS, vS, mS } from "@/style/responsive";
import LogoTitle from "@/components/inventory/LogoTitle";
import StockCard from "@/components/inventory/StockCard";

const SaleStock = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <LogoTitle
                        title="মোট বিক্রয়"
                    />

                    <View style={styles.cardContainer}>
                        <StockCard
                            productName="পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
                            date="২০ জানুয়ারি ২০২২"
                            stockIn="২০০"
                            stockOut="5"
                            stockAvailable="২০০"
                        />
                        <StockCard
                            productName="পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
                            date="২০ জানুয়ারি ২০২২"
                            stockIn="২০০"
                            stockOut="5"
                            stockAvailable="২০০"
                        />  
                        <StockCard
                            productName="পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
                            date="২০ জানুয়ারি ২০২২"
                            stockIn="২০০"
                            stockOut="5"
                            stockAvailable="২০০"
                        />  
                        <StockCard
                            productName="পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
                            date="২০ জানুয়ারি ২০২২"
                            stockIn="২০০"
                            stockOut="5"
                            stockAvailable="২০০"
                        />  
                        <StockCard
                            productName="পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
                            date="২০ জানুয়ারি ২০২২"
                            stockIn="২০০"
                            stockOut="5"
                            stockAvailable="২০০"
                        />  
                        <StockCard
                            productName="পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
                            date="২০ জানুয়ারি ২০২২"
                            stockIn="২০০"
                            stockOut="5"
                            stockAvailable="২০০"
                        />  
                        <StockCard
                            productName="পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
                            date="২০ জানুয়ারি ২০২২"
                            stockIn="২০০"
                            stockOut="5"
                            stockAvailable="২০০"
                        />
                    </View>
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
        padding: mS(16),
    },
    cardContainer: {
        marginTop: mS(15),
    },
});

export default SaleStock;