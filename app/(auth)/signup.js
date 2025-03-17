import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/common/InputField";
import CustomButton from "@/components/common/CustomButton";
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { rS, vS, mS } from "@/style/responsive";

const SignUp = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    picture: null,
    mobileNumber: "",
    password: "",
    accountType: "admin",
  });

  const handleLogin = () => {
    // ... your login logic
    router.replace("/signin");
  };

  const goToDashboard = () => {
    router.replace("/(tabs)/Dashboard");
  };

  // const goToDashboard = () => {
  //   router.replace("/(tabs)/dashboard");
  // }

  const handleSignUpAction = () => {
    // ... your sign up logic
    console.log("Sign Up Form Data:", form);
    // In real app, you would send this data to your backend
  };

  const handleImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const imageUri = response.assets?.[0].uri;
        setForm({ ...form, picture: imageUri });
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        const imageUri = response.assets?.[0].uri;
        setForm({ ...form, picture: imageUri });
      }
    });
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ক</Text>
          </View>
          <Text style={styles.appName}>মেসার্স কাশেম গার্মেন্টস</Text>
          <Text style={[styles.appTagline]}>আপনাকে দোকানের হিসাব নিয়ন্ত্রণ অ্যাপ এ স্বাগতম</Text>

          <View style={styles.inputContainer}>

            <View style={styles.imageUploadContainer}>
              <Text style={styles.inputTitle}>আপনার একটি ছবি প্রদান করুন</Text>
              <TouchableOpacity style={styles.imagePlaceholder} onPress={() => {
                Alert.alert(
                  "Choose Image Source",
                  "Select how you want to upload your picture",
                  [
                    {
                      text: "Camera",
                      onPress: handleCameraLaunch,
                    },
                    {
                      text: "Gallery",
                      onPress: handleImagePicker,
                    },
                    { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
                  ],
                  { cancelable: true }
                );
              }}>
                {form.picture ? (
                  <Image source={{ uri: form.picture }} style={styles.uploadedImage} />
                ) : (
                  <Icon name="camera" size={25} color="#757575" />
                )}
              </TouchableOpacity>
            </View>


            <InputField
              title="আপনার মোবাইল নম্বর লিখুন"
              placeholder='যেমন: ০১০১১-১০০১১০'
              value={form.mobileNumber}
              handleChangeText={(text) => setForm({ ...form, mobileNumber: text })}
              keyboardType="phone-pad"
              otherStyles={styles.inputFieldStyle}
            />

            <InputField
              title="আপনার পাসওয়ার্ড লিখুন"
              placeholder='**** **** ****'
              value={form.password}
              handleChangeText={(text) => setForm({ ...form, password: text })}
              secureTextEntry={true}
              otherStyles={styles.inputFieldStyle}
            />

          </View>

          <View style={styles.accountTypeContainer}>
            <Text style={styles.inputTitle}>অ্যাকাউন্টের ধরণ</Text>
            <View style={styles.accountTypeButtons}>
              <TouchableOpacity
                style={[styles.accountTypeButton, form.accountType === 'admin' && styles.accountTypeButtonActive]}
                onPress={() => setForm({ ...form, accountType: 'admin' })}
              >
                <Text style={[styles.accountTypeButtonText, form.accountType === 'admin' && styles.accountTypeButtonTextActive]}>এডমিন</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.accountTypeButton, form.accountType === 'editor' && styles.accountTypeButtonActive]}
                onPress={() => setForm({ ...form, accountType: 'editor' })}
              >
                <Text style={[styles.accountTypeButtonText, form.accountType === 'editor' && styles.accountTypeButtonTextActive]}>এডিটর</Text>
              </TouchableOpacity>
            </View>
          </View>


          <CustomButton
            title="অ্যাকাউন্ট তৈরি করুন"
            onPress={handleSignUpAction}
            // onPress={goToDashboard}
            otherStyles={styles.signUpButton}
          />

          <TouchableOpacity style={styles.loginLinkContainer} onPress={handleLogin}>
            <Text style={styles.loginLink}>আমার একটি অ্যাকাউন্ট রয়েছে</Text>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>লগইন করুন</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToDashboard}>
            <Text>Go to dashboard</Text>
          </TouchableOpacity>

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
    flexGrow: mS(1),
    paddingBottom: mS(20),
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: mS(20),
    width: "100%",
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: mS(30),
    width: vS(40),
    height: vS(40),
    borderRadius: mS(15),
    backgroundColor: "#4caf50",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: "white",
    fontSize: mS(25),
    fontWeight: 'bold',
  },
  appName: {
    marginTop: mS(5),
    fontSize: mS(22),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appTagline: {
    fontSize: mS(12),
    marginTop: mS(5),
    color: 'gray',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: mS(25),
  },
  inputContainer: {
    // marginTop: mS(5),
    width: '90%',
    maxWidth: mS(350),
    // marginLeft: mS(-20),
    marginLeft: rS(-20),
  },
  inputTitle: {
    fontSize: mS(15),
    // marginBottom: mS(5),
    color: '#222222',
    textAlign: 'left',
    marginLeft: mS(-8),
  },
  inputFieldStyle: {
    marginTop: mS(5),
  },
  imageUploadContainer: {
    marginBottom: mS(5),
    width: mS(320),
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: mS(-55),
  },
  imagePlaceholder: {
    width: vS(70),
    height: vS(70),
    borderRadius: vS(35),
    borderColor: '#D3D3D3',
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: mS(8),
    marginLeft: mS(-120),
  },
  uploadedImage: {
    width: vS(70),
    height: vS(70),
    borderRadius: vS(35),
  },
  accountTypeContainer: {
    marginTop: mS(20),
    width: '90%',
    maxWidth: mS(350),
    // marginLeft: mS(-10),
  },
  accountTypeButtons: {
    borderColor: '#4caf50',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: mS(10),
    marginTop: mS(12),
    marginLeft: mS(-10),
  },
  accountTypeButton: {
    backgroundColor: 'white',
    borderRadius: mS(8),
    paddingVertical: mS(12),
    paddingHorizontal: mS(25),
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  accountTypeButtonActive: {
    backgroundColor: '#4caf50',
  },
  accountTypeButtonText: {
    fontSize: mS(15),
    color: '#333',
  },
  accountTypeButtonTextActive: {
    color: 'white',
  },
  signUpButton: {
    marginLeft: mS(0),
    // marginTop: mS(30),
    // marginBottom: mS(20),
    // width: '90%',
    // maxWidth: mS(350),
    // paddingVertical: mS(14),
    // fontSize: mS(16),
  },
  loginLinkContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: mS(12),
  },
  loginLink: {
    fontSize: mS(14),
    color: 'black',
    marginBottom: mS(8),
  },
  loginButton: {
    // width hocche na 
    borderRadius: mS(8),
    paddingVertical: mS(14),
    paddingHorizontal: mS(35),
    borderWidth: 2,
    borderColor: '#4caf50',
    marginLeft: mS(10),
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: mS(16),
    color: '#4caf50',
    fontWeight: 'bold',
  },
});

export default SignUp;


// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   container: {
//     paddingHorizontal: 20,
//     width: '100%',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     marginTop: 30,
//     width: 60,
//     height: 60,
//     borderRadius: 15,
//     backgroundColor: "#4caf50",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     color: "white",
//     fontSize: 45,
//     fontWeight: 'bold',
//   },
//   appName: {
//     marginTop: 15,
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   appTagline: {
//     fontSize: 16,
//     marginTop: 5,
//     color: 'gray',
//     fontWeight: '300',
//     textAlign: 'center',
//     marginBottom: 25,
//   },
//   inputContainer: {
//     marginTop: 10,
//     width: "90%",

//     // extra add hoyeche margin left input field er ta change korar jonno 
//     marginLeft: -20,
//     maxWidth: 350,
//   },
//   inputTitle: {
//     fontSize: 15,
//     marginBottom: 8,
//     color: '#222222',
//     textAlign: 'left',
//     marginLeft: 5,
//   },
//   inputFieldStyle: {
//     marginTop: 5,
//   },
//   imageUploadContainer: {
//     marginBottom: 10, 
//     width: '100%',
//     flexDirection: 'column', 
//     alignItems: 'center',   

//     // extra add hoise image er jayga ta change korar jonno
//     marginLeft: -65,
//   },
//   imagePlaceholder: {
//     width: 70, 
//     height: 70, 
//     borderRadius: 35,
//     borderColor: '#D3D3D3',
//     borderWidth: 1,
//     backgroundColor: 'white',
//     // extra add hoise image er jayga ta change korar jonno
//     marginLeft: -120,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 8,
//     alignSelf: 'center',
//   },
//   uploadedImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//   },
//   accountTypeContainer: {
//     marginTop: 20, 
//     width: '90%',
//     maxWidth: 350,
//   },
//   accountTypeButtons: {
//     borderColor: '#4caf50',
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     gap: 10,
//     marginTop: 12, 
//   },
//   accountTypeButton: {
//     backgroundColor: 'white',
//     borderRadius: 8, 
//     paddingVertical: 12, 
//     paddingHorizontal: 25, 
//     borderWidth: 2,
//     borderColor: '#4caf50',
//   },
//   accountTypeButtonActive: {
//     backgroundColor: '#4caf50',
//     borderRadius: 8,
//     borderColor: '#4caf50',
//   },
//   accountTypeButtonText: {
//     fontSize: 17, 
//     color: '#333',
//   },
//   accountTypeButtonTextActive: {
//     color: 'white',
//   },
//   signUpButton: {
//     marginTop: 30, 
//     marginBottom: 20, 
//     width: '90%', 
//     maxWidth: 350, 
//     paddingVertical: 14, 
//     fontSize: 20,
//   },
//   loginLinkContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 25, 
//   },
//   loginLink: {
//     fontSize: 17, 
//     color: 'black',
//     marginBottom: 12, 
//   },
//   loginButton: {
//     width: '350',
//     borderRadius: 8,
//     paddingVertical: 14, 
//     paddingHorizontal: 35, 
//     borderWidth: 2,
//     borderColor: '#4caf50',
//     marginLeft: 10,
//   },
//   loginButtonText: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#4caf50',
//     fontWeight: 'bold',
//   },
// });

// export default SignUp;


