// import React from "react";
// import { View, StyleSheet, ScrollView, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { rS, vS, mS } from "@/style/responsive";
// import LogoTitle from "@/components/inventory/LogoTitle";
// // import FilterComponent from "@/components/inventory/Filter";
// import FilterButton from "../../../components/common/Filter";
// // import SaleTable from "../../../components/inventory/TotalSaleTable";
// import SaleTable from "../../../components/inventory/TotalSaleTable";
// const ProductStockTable = () => {
//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <ScrollView style={styles.scrollContainer}>
//                 <View style={styles.container}>
//                     <LogoTitle
//                         title="মোট বিক্রয়"
//                     />
//                     <View style={styles.filterContainer}>
//                         <FilterButton />
//                     </View>

//                     <View style={styles.table}>
//                         <SaleTable />
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     scrollContainer: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         paddingHorizontal: mS(14),
//         paddingVertical: mS(14),
//     },
//     table:{
//         marginLeft: mS(-10)
//     }
// });

// export default ProductStockTable;