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
import { SearchBar } from "react-native-elements";

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
          <ContainerView style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Container>
                <TextView>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      marginTop: -5,
                    }}
                  >
                    4.5
                  </Text>
                  <ImageLogo
                    style={{ marginTop: 8, marginLeft: -5 }}
                    source={require("../../assets/star.png")}
                  />
                  <ImageLogo
                    style={{ marginTop: 9, marginLeft: 100 }}
                    source={require("../../assets/heart.png")}
                  />
                </TextView>
                <ImageLogo source={require("../../assets/man.png")} />
                <ContainerValue>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Suit
                  </Text>
                  <TextView>
                    <Text
                      style={{
                        padding: 10,
                        marginTop: -10,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ED1C22",
                      }}
                    >
                      20,000
                    </Text>
                    <Text
                      style={{
                        padding: 10,
                        fontSize: 13,
                        marginTop: -8,
                        marginLeft: 46,
                        fontWeight: "bold",
                      }}
                    >
                      20% OFF
                    </Text>
                  </TextView>
                </ContainerValue>
              </Container>
            </TouchableOpacity>
            <TouchableOpacity>
              <Container>
                <TextView>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      marginTop: -5,
                    }}
                  >
                    4.5
                  </Text>
                  <ImageLogo
                    style={{ marginTop: 8, marginLeft: -5 }}
                    source={require("../../assets/star.png")}
                  />
                  <ImageLogo
                    style={{ marginTop: 9, marginLeft: 100 }}
                    source={require("../../assets/heart.png")}
                  />
                </TextView>
                <ImageLogo source={require("../../assets/suit.png")} />
                <ContainerValue>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Suit
                  </Text>
                  <TextView>
                    <Text
                      style={{
                        padding: 10,
                        marginTop: -10,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ED1C22",
                      }}
                    >
                      20,000
                    </Text>
                    <Text
                      style={{
                        padding: 10,
                        fontSize: 13,
                        marginTop: -8,
                        marginLeft: 46,
                        fontWeight: "bold",
                      }}
                    >
                      20% OFF
                    </Text>
                  </TextView>
                </ContainerValue>
              </Container>
            </TouchableOpacity>
            <TouchableOpacity>
              <Container>
                <TextView>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      marginTop: -5,
                    }}
                  >
                    4.5
                  </Text>
                  <ImageLogo
                    style={{ marginTop: 8, marginLeft: -5 }}
                    source={require("../../assets/star.png")}
                  />
                  <ImageLogo
                    style={{ marginTop: 9, marginLeft: 100 }}
                    source={require("../../assets/heart.png")}
                  />
                </TextView>
                <ImageLogo source={require("../../assets/jacket.png")} />
                <ContainerValue>
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Suit
                  </Text>
                  <TextView>
                    <Text
                      style={{
                        padding: 10,
                        marginTop: -10,
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ED1C22",
                      }}
                    >
                      20,000
                    </Text>
                    <Text
                      style={{
                        padding: 10,
                        fontSize: 13,
                        marginTop: -8,
                        marginLeft: 46,
                        fontWeight: "bold",
                      }}
                    >
                      20% OFF
                    </Text>
                  </TextView>
                </ContainerValue>
              </Container>
            </TouchableOpacity>
          </ContainerView>
        </ScrollView>
      </KeyboardAvoidingView>
    </ViewStyle>
  );
};

const ViewStyle = styled.View`
  flex: 1;
  background-color: #f0f8ff;
`;

const TextStyle = styled.Text`
  font-size: 24px;
`;

const Container = styled.View`
  margin-top: 25px;
  margin-left: 15px;
  border-radius: 20px;
  background-color: #f5f5dc;
  height: 238px;
  width: 180px;
`;
const ImageLogo = styled.Image`
  margin-top: -1px;
  margin-left: 25px;
`;
const ContainerView = styled.View``;
const TextView = styled.View`
  flex-direction: row;
`;

const ContainerValue = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 5px;
`;
export default HomeScreen;
