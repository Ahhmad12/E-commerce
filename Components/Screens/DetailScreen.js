import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import styled from "styled-components/native";

export default function DetailScreen({ route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f8ff",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Container>
        <Image
          style={{ marginTop: 5, marginLeft: 330 }}
          source={require("../../assets/heart1.png")}
        />
        <Image
          style={{ marginTop: 30, marginLeft: "20%" }}
          source={require("../../assets/man3.png")}
        />
      </Container>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
        Summer Dress
      </Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>RS. 24,000</Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ marginTop: 20 }}
          source={require("../../assets/star.png")}
        />
        <Image
          style={{ marginTop: 20, marginLeft: 5 }}
          source={require("../../assets/star.png")}
        />
        <Image
          style={{ marginTop: 20, marginLeft: 5 }}
          source={require("../../assets/star.png")}
        />
        <Image
          style={{ marginTop: 20, marginLeft: 5 }}
          source={require("../../assets/star.png")}
        />
        <Image
          style={{ marginTop: 20, marginLeft: 5 }}
          source={require("../../assets/star.png")}
        />
      </View>
      <TouchableOpacity style={{ marginTop: 40 }}>
        <Pressable onPress={() => Alert.alert("Alert", "Added")}>
          <ButtonGo>Add to cart</ButtonGo>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
}
const Container = styled.View`
  margin-top: -20px;
  width: 400px;
  height: 360px;
  background-color: #f5f5dc;
`;

const ButtonGo = styled.Text`
  background-color: #de1e07;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  border-radius: 20px;
  width: 250px;
`;
