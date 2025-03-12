import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { rS, vS, mS } from "@/style/responsive";
import Icon from "react-native-vector-icons/FontAwesome";

const DealsCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        src="https://cdn-icons-png.flaticon.com/128/3899/3899160.png"
                    />
                </View>
                <Text style={styles.title}>আহমেদ হোসেন</Text>
                <Text style={styles.serialNumber}>সিরিয়াল : ৫০২</Text>
                <View style={styles.locationContainer}>
                    <Icon name="map-marker" style={styles.icon} />
                    <Text style={styles.location}>সরিষাবাড়ী, জামালপুর, ময়মনসিংহ</Text>
                </View>
            </View>

            <View style={styles.iconContainer}>
                <Icon name="download" style={styles.uparrowicon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // padding: mS(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: mS(12),
        paddingHorizontal: mS(14),
        borderRadius: 15,
        backgroundColor: "white",
        borderColor: "#4caf50",
        borderWidth: 1,
        marginBottom: mS(16),
    },
    contant:{
        flexDirection: 'column',
        alignItems: 'center',

    },
    imageContainer: {
        marginBottom: mS(8),
    },
    image: {
        width: rS(30),
        height: vS(30),
        borderRadius: mS(8),
    },
    title: {
        fontSize: mS(18),
        fontWeight: "bold",
        marginBottom: mS(2),
    },
    serialNumber: {
        fontSize: mS(12),
        color: "gray",
        marginBottom: mS(2),
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: mS(6),
    },
    location: {
        fontSize: mS(14),
        color: "black",
    },
    icon: {
        fontSize: mS(14),
        color: "black",
    },
    iconContainer: {
        height: vS(30),
        width: rS(35),
        // transform: [{ rotate: '180deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4caf50',
        borderRadius: 10,
        // marginTop: -60
        marginTop: mS(70),
        marginLeft: mS(60),
    },
    uparrowicon: {
        fontSize: mS(20),
        color: "white",
        fontWeight: "100"
    }
});

export default DealsCard;