import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
} from "react-native";
import Styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from "rn-material-ui-textfield";

const Registeration = ({ navigation }) => {
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
          <ImageView>
            <Image source={require("../assets/carts.png")} />
          </ImageView>
          <InputStyle>
            <InputRel>
              <OutlinedTextField
                label="Email"
                baseColor="#000000"
                textColor="#000000"
                tintColor="#000000"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
            </InputRel>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={{ color: "red", marginLeft: -140 }}>
                  Email must by 8 characters
                </Text>
              </Animatable.View>
            )}
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
                <Text style={{ color: "red", marginLeft: -90 }}>
                  Password must by 8 characters long
                </Text>
              </Animatable.View>
            )}
          </InputStyle>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 70 }}>
            <Pressable onPress={() => navigation.navigate("")}>
              <ButtonGo> Login </ButtonGo>
            </Pressable>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 10 }}>
            <Pressable onPress={() => navigation.navigate("")}>
              <Text>Don't have any account? SignUp</Text>
            </Pressable>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* </ImageBackground> */}
    </ViewStyle>
  );
};

export default Registeration;

const ViewStyle = Styled.View`
  flex:1;
  background-color:#FFFFFF;
`;

const ButtonGo = Styled.Text`
   background-color: #000000;
   text-align: center;
   color: #FFFFFF;
   font-size: 25px;
   padding-bottom: 10px;
   width:250px;
   height:40px;
   font-weight: bold;
   border-radius: 50px;
 `;

const InputRel = Styled.View`
width: 80%;
margin-top: 5px;
`;

const InputStyle = Styled.View`
margin-top:80px;
align-items:center;
`;

const ImageView = Styled.View`
align-items:center;
margin-top:60px;
`;
