// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }




import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }
        , [loaded]);

    if (!loaded) {
        return
    }
    return (
        <Stack>
            <Stack.Screen name="(splash)/index"
                options={{ headerShown: false }} />

            <Stack.Screen name="(auth)"
                options={{ headerShown: false }} />

            <Stack.Screen name="(tabs)"
                options={{ headerShown: false }} />
        </Stack>

    );
}










// import { auth } from "./firebaseConfig";


//  const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return unsubscribe;
//   }, []);

    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     {!user ? (
    //       <>
    //         <Stack.Screen name="SignIn" component={SignInScreen} />
    //         {user?.uid === "OWNER_FIREBASE_UID" && <Stack.Screen name="SignUp" component={SignUpScreen} />}
    //       </>
    //     ) : (
    //       <>
    //         <Stack.Screen name="AdminScreen" component={AdminScreen} />
    //         <Stack.Screen name="EditorScreen" component={EditorScreen} />
    //       </>
    //     )}
    //   </Stack.Navigator>