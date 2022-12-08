import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";
import SettingScreen from "./Screens/SettingScreen";

const homeName = "Home";
const detailName = "Detail";
const settingName = "Setting";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingName) {
              iconName = focused ? "setting" : "setting-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailName} component={DetailScreen} />
        <Tab.Screen name={settingName} component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
