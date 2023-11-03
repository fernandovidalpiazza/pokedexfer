import { useNavigation } from "@react-navigation/native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity,Image, StyleSheet } from "react-native";

export default function PokemonCard({ pokemon }) {

const navigation = useNavigation ()


  return (
    <TouchableOpacity onPress={() => navigation.navigate("PokemonScreen", {pokemonSelected:pokemon})}>
     <View style={{ ...styles.cardContainer, backgroundColor: pokemon.color }}>

        <Text style = {styles.name}>
          {pokemon.name} {pokemon.id}
        </Text>
        <View style={styles.pokeballContainer}> 
          <Image source={require("../assets/picachu.png")} style={styles.picachu} /> 
        </View>
        <Image source={{uri: pokemon.picture}} style={styles.pokemonImagen} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    marginHorizontal: 10,
    height:120,
width:160,
marginBottom:25,
borderRadius:10,
shadowColor:"#000",
textShadowOffset:{
  width:0,
  height:2,

},

shadowOpacity:0.25,
shadowRadius:4,
elevation:5,
 },
 name:{
  color: "witesmoke",
  fontSize:20,
  top:20,
  left:10,
   },
   pokeballContainer:{
    width:100,
    height:100,
    position: "absolute",
    bottom:0,
    overflow:"hidden",
    opacity:0.4,

   },
   picachu:{
    width:100,
    height:100,
    position:"absolute",
    bottom:-25,
    right:-25,

   },
   pokemonImagen:{
      width:100,
      height:100,
      position:"absolute",
      right:-15,
      bottom:-10,

   },

})







