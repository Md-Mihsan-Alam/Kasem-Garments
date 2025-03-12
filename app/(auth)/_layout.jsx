import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
    return (
    <>    
        <Stack>
            <Stack.Screen
                name="signin"
                options={{
                    title: "Sign In",
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="signup"
                options={{
                    title: "Sign In",
                    headerShown: false,
                }}
            />
        </Stack>

        <StatusBar backgroundColor="white"
             style="light"
        />
    </>
    );
}