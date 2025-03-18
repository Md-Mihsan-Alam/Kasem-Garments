import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { rS, vS, mS } from "@/style/responsive";
import InputField from "@/components/common/InputField";
import IconButton from "../components/common/IconButton";
import ArrowTitle from "../components/common/ArrowTitle";

const AddProduct = () => {
  const [product, setProduct] = useState({
    date: '',
    name: '',
    price: '',
    quantity: '',
    image: '',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            {/* <View style={styles.iconContainer}>
              <IconSymbol name="arrow.left" style={styles.icon} />
            </View>
            <Text style={styles.screenTitle}>পণ্য যুক্ত করুন</Text> */}
            <ArrowTitle
              title="পণ্য বিয়োগ করুন"
            />
          </View>

          <View style={styles.imageContainer}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/9486/9486994.png"
              style={styles.image}
            />
          </View>

          <View style={styles.inputContainer}>
            <InputField
              title="তারিখ"
              placeholder="যেমন, ০১-০১-২০০০"
              iconName="calendar"
            />

            <InputField
              title="পণ্যের নাম "
              placeholder="যেমন, পুরুষদের জন্য ফ্যাশনেবল টি শার্ট"
              iconName="cubes"
            />

            <InputField
              title="মূল্য"
              placeholder="যেমন, ২২০০ টাকা"
              iconName="tag"
            />

            <InputField
              title="পরিমান"
              placeholder="যেমন, ২২ টি"
              iconName="cube"
            />
          </View>

          <IconButton
            title="বিয়োগ করুন"
            iconName="file-o"
            style={styles.checkButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProduct;

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
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: mS(30),
  },
  imageContainer: {
    alignItems: "center",
    marginTop: mS(30),
  },
  image: {
    width: rS(130),
    height: rS(130),
    borderRadius: 10,
  },
  inputContainer: {
    marginLeft: mS(8),
  },
  checkButton: {
    // marginTop: mS(-20),
    marginLeft: mS(5),
  },
});