import * as React from "react";
import { View, Text } from "react-native";

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 24, fontWeight: "bo ld" }}
      >
        Detail Screen
      </Text>
    </View>
  );
}
