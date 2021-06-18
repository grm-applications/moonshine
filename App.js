import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen.js";
import GameScreen from "./screens/GameScreen.js";
import ParanoiaScreen from "./screens/ParanoiaScreen.js";
import NeverHaveIEverScreen from "./screens/NeverHaveIEverScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NeverHaveIEverScreen" component={NeverHaveIEverScreen} options={{headerShown: false}}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="GameScreen" component={GameScreen} options={{headerShown: false}}/>
          <Stack.Screen name="ParanoiaScreen" component={ParanoiaScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
