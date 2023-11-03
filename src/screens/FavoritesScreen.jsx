import { View, Text } from "react-native";
import React from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function FavoritesScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style= {{top: top}}>
      <Text>FavoritesScreen</Text>
    </View>
  );
}
