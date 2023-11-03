import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();


export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, 
    cardStyle: "while",
    }}>
      <Stack.Screen name="HomeScreem" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  )
}