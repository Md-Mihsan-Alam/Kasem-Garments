import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { SafeAreaView } from "react-native-safe-area-context";
import { rS, vS, mS } from "@/style/responsive";
import InfoCard from "../components/common/InfoCard";
import LogoTitle from "../components/inventory/LogoTitle";
import { useRouter } from 'expo-router';

const DashboardScreen = () => {
    const router = useRouter();

    const goToProductStock = () => {
        router.replace("/(main)/Product-Stock");
    }

    const goToReturnStock = () => {
        router.replace("/(main)/Return-Stock");
    }

    const gotoTotalSale = () => {
        router.replace("/(main)/Sales");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <LogoTitle
                        title="ড্যাশবোর্ড"
                    />

                    <View style={styles.profileContainer}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                style={styles.profileImage}
                                src="https://t3.ftcdn.net/jpg/03/77/30/16/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg"
                            />
                        </View>
                        <View style={styles.profileInfoContainer}>
                            <Text style={styles.profileGreeting}>হ্যালো,</Text>
                            <Text style={styles.profileName}>আহমেদ হোসেন</Text>
                        </View>
                    </View>

                    <View style={styles.overviewContainer}>
                        <Text style={styles.overviewTitle}>ওভারভিউ</Text>
                    </View>

                    <View style={styles.infoCardsContainer}>

                        <TouchableOpacity
                            onPress={goToProductStock}
                        >
                            <InfoCard
                                src={"https://png.pngtree.com/png-clipart/20231001/original/pngtree-three-cardboard-boxes-png-image_13027844.png"}
                                title={"পণ্যের স্টক"}
                                description={"যে পরিমাণ পণ্য মজুদ আছে"}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={goToReturnStock}
                        >
                            <InfoCard
                                src={"https://www.aindiancart.com/cdn/shop/files/return.png?v=1731575130"}
                                title={"ফেরত মালের স্টক"}
                                description={"যে পরিমাণ পণ্য ফেরত যোগ্য"}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={gotoTotalSale}
                        >
                            <InfoCard
                                src={"https://png.pngtree.com/png-vector/20220709/ourlarge/pngtree-hand-hold-box-png-image_5683875.png"}
                                title={"মোট বিক্রি"}
                                description={"যে পরিমাণ পণ্য বিক্রি হয়েছে"}
                            />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DashboardScreen;

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
        paddingHorizontal: mS(20),
        width: "100%",
    },
    profileContainer: {
        marginTop: mS(30),
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImageContainer: {
        width: vS(50),
        height: vS(50),
        borderRadius: mS(25),
        marginLeft: mS(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        color: "white",
        height: vS(55),
        width: vS(55),
        borderRadius: mS(50),
    },
    profileInfoContainer: {
        marginLeft: mS(20),
    },
    profileGreeting: {
        fontSize: mS(15),
        color: 'black',
    },
    profileName: {
        fontSize: mS(22),
        color: 'black',
        fontWeight: "600",
    },
    overviewContainer: {
        marginTop: mS(30),
    },
    overviewTitle: {
        marginLeft: mS(8),
        fontSize: mS(20),
        color: 'black',
        fontWeight: "600",
    },
    infoCardsContainer: {
        marginTop: mS(20),
    },
});