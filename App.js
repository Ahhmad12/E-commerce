import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

import FirstPage from "./Components/FirstPage";
import Login from "./Components/Login";
import Registration from "./Components/Registration";

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Fashion" component={FirstPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default App;
