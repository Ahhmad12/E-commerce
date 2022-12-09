import * as React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Styled from "styled-components/native";

export default function SettingScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 90, marginTop: 20, height: 90, borderRadius: 200 / 2 }}
        source={require("../../assets/ahmad2.jpeg")}
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>Edit Profile</Text>
      <Container>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Text style={{ padding: 10, fontSize: 18 }}>Ahmad Naeem</Text>
          <ImageLogo
            style={{ marginLeft: 152, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ padding: 10, fontSize: 18 }}>Muhammad Naeem</Text>
          <ImageLogo
            style={{ marginLeft: 117, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ padding: 10, fontSize: 18 }}>
            ahmadnaeem26831@gmail.com
          </Text>
          <ImageLogo
            style={{ marginLeft: 27, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ padding: 10, fontSize: 18 }}>ahmad12*</Text>
          <ImageLogo
            style={{ marginLeft: 180, marginTop: 10 }}
            source={require("../../assets/edit.png")}
          />
        </View>
      </Container>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Rel>
          <TouchableOpacity>
            <Pressable onPress={() => Alert.alert("Alert", "Profile Updated")}>
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
  width: 250px;
`;

const Container = Styled.View`
margin-top:20px;
height:280px;
width:320px;
background-color: "#FFFFFF";
border-radius:20px;
`;

const ImageLogo = Styled.Image`

`;
