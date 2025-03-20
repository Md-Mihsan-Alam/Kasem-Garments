import { Tabs, Redirect } from 'expo-router';
import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconFont from 'react-native-vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4caf50',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
        },
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        // tabBarStyle: Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: 'absolute',
        //   },
        //   default: {},
        // }),
      }}>
      <Tabs.Screen
        name="Dashboard/index"
        options={{
            title: 'হোম',
            tabBarIcon: ({ color }) => 
            // <IconSymbol size={28} name="house.fill" color={color} />,
            <Icon name='home' size={26} color={color}/>
          }}
      />
      <Tabs.Screen
        name="AddProduct/index"
        options={{
          title: 'পণ্য যুক্ত করুন',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.square.fill" color={color} />,
          tabBarIcon: ({color}) => <IconMaterial name='plus' size={26} color={color}/> 
          
        }}
      />
      <Tabs.Screen
        name="TodaysSale/index"
        options={{
          title: 'আজকের মেমোর বিবরণ',
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="invoice.fill" color={color} />,
          tabBarIcon: ({color}) => <Icon name='receipt' size={26} color={color}/> 
          
        }}
      />
      <Tabs.Screen
        name="Invoice/index"
        options={{
          title: 'বিক্রি করুন',
          tabBarIcon: ({color}) => <Icon name='cart' size={26} color={color}/> 
        }}
      />
    </Tabs>
  );
}