import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  navigation,
  Button,
  TouchableOpacity,
} from "react-native";
import Styled from "styled-components/native";

const FirstPage = ({ navigation }) => {
  return (
    <ViewStyle>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/pic3.jpg")}
      >
        <ViewStyle1>
          <Title>New Fashion</Title>
          <TouchableOpacity style={{ marginTop: 20, marginLeft: 55 }}>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <ButtonGo> Explore </ButtonGo>
            </Pressable>
          </TouchableOpacity>
        </ViewStyle1>
      </ImageBackground>
    </ViewStyle>
  );
};
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
margin-top:450px;

`;

const ViewStyle1 = Styled.View`
padding:25px;
`;

export default FirstPage;
