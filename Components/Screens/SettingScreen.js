import * as React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import Styled from "styled-components/native";

export default function SettingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 80, height: 80, borderRadius: 200 / 2 }}
        source={require("../../assets/ahmad2.jpeg")}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
        Edit Profile
      </Text>
      <Container>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
            Ahmad Naeem
          </Text>
          <ImageLogo
            style={{ marginLeft: 150, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
            Muhammad Naeem
          </Text>
          <ImageLogo
            style={{ marginLeft: 115, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
            ahmadnaeem26831@gmail.com
          </Text>
          <ImageLogo
            style={{ marginLeft: 20, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
            ahmad12*
          </Text>
          <ImageLogo
            style={{ marginLeft: 178, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
      </Container>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Rel>
          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <ButtonGo>Save Profile</ButtonGo>
            </Pressable>
          </TouchableOpacity>
        </Rel>
      </View>
    </View>
  );
}

const Rel = Styled.View`
  align-items: center;
  margin-top: ${(props) => (props.margintop ? "60px" : "20px")};
`;

const ButtonGo = Styled.Text`
  background-color: #de1e07;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  border-radius: 5px;
  width: 285px;
`;

const Container = Styled.View`
margin-top:30px;
height:300px;
width:320px;
background-color:#FFFFFF;
`;

const ImageLogo = Styled.Image`

`;
