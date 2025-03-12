import { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {rS, vS, mS} from '@/style/responsive';

const Splash = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      
      router.replace('/(auth)/signup'); 
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <>

    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.logoContainer}>
            <Text style={styles.logo}>ক</Text>
        </View>

      <Text style={styles.appName}>মেসার্স কাশেম গার্মেন্টস</Text>

      </ScrollView>
    </SafeAreaView>

    <StatusBar
      backgroundColor="white"
      style='light'

    />

    </>
);
};

const styles = StyleSheet.create({
  container: {
    // minHeight: '80vh',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    width: rS(80),
    height: vS(80),
    borderRadius: 10,
    backgroundColor: "#4caf50",
    justifyContent: 'center',
    alignItems: 'center',
    },
  logo: {
    color: "white",
    fontSize: mS(60),
    fontWeight: 'bold',
  },
  appName: {
    marginTop: mS(20),
    fontSize: mS(25),
    fontWeight: 'bold',
  },
});

export default Splash;