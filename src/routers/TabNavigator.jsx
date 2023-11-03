import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "White",
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#86d5",
        tabBarStyle: {
          position: "absulete",
          padidingBottom: 10,
          borderWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreenStack"
        component={StackNavigator}
        options={{
          tabBarLabel: "Pokemones",
          tabBarIcon: ({color}) => <FontAwesome name="list" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Faboritos",
          tabBarIcon: ({color}) => <FontAwesome name="heart" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
