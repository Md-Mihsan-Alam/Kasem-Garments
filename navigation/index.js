// import { CreateStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Dashboard from '../app/(main)/dashboard';
// import TodaysDeals from '../app/(main)/deals';
// import AddProduct from '../app/(main)/add-product';

// const Stack = CreateStackNavigator();
// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name='dashboard' component={Dashboard} />
//             <Tab.Screen name='deals' component={TodaysDeals} />
//             <Tab.Screen name='add-product' component={AddProduct} />
//         </Tab.Navigator>
//     )
// }

// export const RootNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="MainTabs" component={BottomTabs} />
//             <Stack.Screen name="dashboard" component={Dashboard} />
//             <Stack.Screen name="deals" component={TodaysDeals} />
//         </Stack.Navigator>
//     )
// }