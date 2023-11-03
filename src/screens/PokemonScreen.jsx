import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PokemonScreen({ route, navigation }) {
  const { pokemonSelected } = route.params;
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ top: top }}>
      <Text>PokemonScreen</Text>
      <TouchableOpacity onLongPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 50 }}>regresar</Text>
      </TouchableOpacity>
    </View>
  );
}
