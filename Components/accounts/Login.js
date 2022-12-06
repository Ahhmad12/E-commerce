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

const Login = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: true,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const handleValidUser = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const textInputChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  return (
    <ViewStyle>
      <KeyboardAvoidingView>
        <ScrollView>
          <Header>
            <ImageLogo source={require("../../assets/shopping-cart.png")} />
            <ViewHeader>
              <TextStyle color font bold style={{ fontWeight: "bold" }}>
                StarBird
              </TextStyle>
              <TextStyle>Make it Happen. Now!</TextStyle>
            </ViewHeader>
          </Header>

          <Rel style={{ marginTop: 60 }}>
            <TextStyle style={{ fontWeight: "bold", fontSize: 19 }}>
              Sign In to StarBird
            </TextStyle>
            <TouchableOpacity>
              <Pressable onPress={() => navigation.navigate("Registration")}>
                <TextStyle
                  style={{
                    fontSize: 15,
                    AlignItems: "center",
                    color: "#ED1C22",
                  }}
                >
                  <TextStyle style={{ fontSize: 15 }}>New here? </TextStyle>
                  Create an Account
                </TextStyle>
              </Pressable>
            </TouchableOpacity>
          </Rel>
          <Rel margintop>
            <InputRel style={{ marginTop: 10 }}>
              <OutlinedTextField
                label="Phone number, username or email address"
                baseColor="#000000"
                textColor="#000000"
                tintColor="#000000"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
            </InputRel>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text
                  style={{ color: "red", marginLeft: -140, marginTop: -10 }}
                >
                  Email must by 8 characters
                </Text>
              </Animatable.View>
            )}
            <Pressable onPress={() => navigation.navigate("Forget Password")}>
              <TextStyle
                style={{
                  fontSize: 15,
                  marginLeft: 180,
                  color: "#ED1C22",
                  marginBottom: 10,
                }}
              >
                Forget Password?
              </TextStyle>
            </Pressable>
            <InputRel>
              <OutlinedTextField
                label="Password"
                baseColor="#000000"
                textColor="#000000"
                tintColor="#000000"
                onChangeText={(val) => handlePasswordChange(val)}
              />
            </InputRel>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={{ color: "red", marginLeft: -90, marginTop: -10 }}>
                  Password must by 8 characters long
                </Text>
              </Animatable.View>
            )}
          </Rel>
          <Rel>
            <TouchableOpacity>
              <Pressable onPress={() => navigation.navigate("Home Screen")}>
                <ButtonGo>Continue</ButtonGo>
              </Pressable>
            </TouchableOpacity>
          </Rel>
          <TextStyle margintop marginLeft>
            <TextStyle style={{ fontWeight: "bold" }}>Star Bird </TextStyle>
            by Ahmad Naeem
          </TextStyle>
        </ScrollView>
      </KeyboardAvoidingView>
    </ViewStyle>
  );
};
const ViewStyle = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const ButtonGo = styled.Text`
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

const TextStyle = styled.Text`
font-size:${(props) => (props.font ? "33px" : "16px")};
color:${(props) => (props.color ? "#ED1C22" : "#000000")};
margin-left:${(props) => (props.margin ? "-50px" : "0px")}
margin-top:${(props) => (props.margintop ? "80px" : "0px")}
margin-left:${(props) => (props.marginLeft ? "95px" : "0px")}

`;
const Header = styled.View`
  flex-direction: row;
  margin-left: 80px;
  margin-top: 15px;
`;
const InputRel = styled.View`
  width: 80%;
  height: 70px;
  position: relative;
  top: 0px;
`;

const Rel = styled.View`
  align-items: center;
  margin-top: ${(props) => (props.margintop ? "60px" : "20px")};
`;

const Row = styled.View`
  flex-direction: row;
  width: 175px;
`;

const ImageLogo = styled.Image`
  margin-top: -5px;
`;
const ViewHeader = styled.View`
  flex-direction: column;
  margin-left: 5px;
`;

export default Login;
