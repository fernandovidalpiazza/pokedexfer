import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import StackNavigator from "./src/routers/StackNavigator";
import TabNavigator from "./src/routers/TabNavigator";
export default function App() {
  return (
    <NavigationContainer>
    <TabNavigator/>
    </NavigationContainer>
  );
}

