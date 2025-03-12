// inventory-app/app/(auth)/signup.tsx
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/common/InputField';
import CustomButton from '@/components/common/CustomButton';
import { rS, vS, mS } from '@/style/responsive';

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleSignUp = () => {
    // ... your sign-up logic
    router.replace('/(auth)/signup'); // Navigate to sign-up
  };

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>

          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ক</Text>

          </View>
          <Text style={styles.appName}>মেসার্স কাশেম গার্মেন্টস</Text>

          <Text style={[styles.appName, { fontSize: mS(14), marginTop: mS(0), color: 'gray', fontWeight: mS(100), }]}>আপনাকে দোকানের হিসাব নিয়ন্ত্রণ অ্যাপ এ স্বাগতম</Text>

          <View style={styles.inputContainer}>

            <InputField
              title="আপনার মোবাইল নাম্বার লিখুন"
              placeholder='যেমন: ০১০১১-১০০১১০'
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
              otherStyles={{ marginTop: mS(10) }}
            />
            <InputField
              title="আপনার পাসওয়ার্ড লিখুন"
              placeholder='**** **** ****'
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            // keyboardType="password"
            // secureTextEntry={true}
            />

          </View>

          <Text style={styles.forgotPass}>পাসওয়ার্ড ভুলে গেছেন?</Text>

          <CustomButton

            title="লগইন করুন"
            onPress={handleSignUp}  
            
          />

        </View>
      </ScrollView>
    </SafeAreaView>


    // <View style={styles.container}>
    //   <Button title="অ্যাকাউন্ট তৈরি করুন" onPress={handleSignUp} />
    //   <TouchableOpacity onPress={() => router.replace('/(auth)/signin')}>
    //     <Text>আমার একটি অ্যাকাউন্ট রয়েছে</Text>
    //   </TouchableOpacity>

    //   <InputField  />
    //   {/* <inputField  /> */}
    // </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingLeft: mS(20),
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    marginLeft: mS(10),
    width: rS(45),
    height: vS(45),
    borderRadius: 10,
    backgroundColor: "#4caf50",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: "white",
    fontSize: mS(35),
    fontWeight: 'bold',
  },
  appName: {
    marginLeft: mS(10),
    marginTop: mS(10),
    fontSize: mS(22),
    fontWeight: 'bold',
  },
  inputContainer:{
    marginLeft: mS(10),
    marginTop: mS(20),
    width: "90%",
  },
  forgotPass:{
    marginLeft: mS(10),
    color:'#4caf50',
    fontSize: mS(15),
    marginTop: mS(10),
  },

});

export default SignIn;