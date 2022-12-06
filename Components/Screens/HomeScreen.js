import React from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from "rn-material-ui-textfield";
import styled from "styled-components/native";

const HomeScreen = ({ navigation }) => {
  return (
    <ViewStyle>
      <KeyboardAvoidingView>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={{ flexDirection: "row", height: 250 }}>
            <ContainerBox>
              <ImageLogo source={require("../../assets/woman-clothes.png")} />
            </ContainerBox>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", height: 250 }}>
            <ContainerBox>
              <ImageLogo source={require("../../assets/woman-clothes.png")} />
            </ContainerBox>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", height: 250 }}>
            <ContainerBox>
              <ImageLogo source={require("../../assets/woman-clothes.png")} />
            </ContainerBox>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ViewStyle>
  );
};

const ViewStyle = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
const ContainerBox = styled.Text`
  margin-top: 20px;
  border-radius: 20px;
  background-color: #f5f5f5;
  margin-left: 10px;
  padding: 0px;
  width: 150px;
`;

const TextStyle = styled.Text`
  font-size: 24px;
`;

const ImageLogo = styled.Image`
  margin-top: -20px;
`;
export default HomeScreen;
