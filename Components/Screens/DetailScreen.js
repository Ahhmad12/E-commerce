import * as React from "react";
import { View, Text, Image } from "react-native";

export default function DetailScreen({ navigation, props }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 24, fontWeight: "bold" }}
      >
        Detail Screen
      </Text>
    </View>
  );
}
