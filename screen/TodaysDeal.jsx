import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { rS, vS, mS } from "@/style/responsive";
import ArrowTitle from "../components/common/ArrowTitle";
import DealsCard from "../components/inventory/DealsCard";
import IconButton from "../components/common/IconButton";

const TodaysDealScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <ArrowTitle
                        title="আজকের মেমোর বিবরণ"
                    />

                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />

{/* eta evabe thakbe na button ta oita bottom tab navigation er sathe lege thakbe
 niche gele niche upore gele upore jabe 
 aita apatoto lagano holo 
*/}
                    <IconButton title="সকল মেমো ডাউনলোড করুন" iconName="print"/>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default TodaysDealScreen;

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
        paddingVertical: mS(10),
        paddingHorizontal: mS(20),
        width: "100%",
    },
});