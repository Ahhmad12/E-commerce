import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  navigation,
  Button,
  TouchableOpacity,
} from "react-native";
import Styled from "styled-components/native";
import Login from "./Login";
import { createStackNavigator } from "@react-navigation/stack";
const StackNavigator = createStackNavigator();

export default function FirstPage({ navigation }) {
  return (
    <ViewStyle>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/pic3.jpg")}
      >
        <Title>New Fashion</Title>
        <TouchableOpacity
          style={{
            alignItems: "center",
            resizeMode: "stretch",
          }}
        >
          <ButtonGo> Explore </ButtonGo>
        </TouchableOpacity>
      </ImageBackground>
    </ViewStyle>
  );
}
const ViewStyle = Styled.View`
flex:1;
align-items:stretch;
`;

const ButtonGo = Styled.Text`
   background-color: #FFFFFF;
   text-align: center;
   margin-top:-5px;
   color: #000000;
   font-size: 25px;
   padding-bottom: 10px;
   width:200px;
   border-radius: 50px;
   font-family: sans-serif-thin;
   font-weight:bold;
 `;

const Title = Styled.Text`
color: #FFFFFF;
font-size:35px;
font-weight:bold;
padding:35px;
margin-top:550px;

`;
