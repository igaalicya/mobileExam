import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { Icon } from "native-base";
import H1 from "../../components/Text/H1";
import Colors from "../../constants/Colors";
import Button from "../../components/Button/Button";
import LoginBG from "../../../assets/images/login_bg.png";
import DarkOverlay from "../../components/General/DarkOverlay";
import TextUI from "../../components/Text/TextUI";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 38,
    height: 34,
    color: "red",
  },
  loginText: {
    marginTop: 12,
  },
});

export default (props) => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        username,
      })
    )
      .then(() => {
        dispatch({
          type: "USER_LOGIN",
          payload: {
            username,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="height"
        style={{ justifyContent: "center", flex: 1 }}
      >
        <View style={{ paddingHorizontal: 30 }}>
          <View style={{ ...styles.contentContainer }}>
            <H1
              style={{
                color: Colors.primaryColor,
                fontSize: 40,
                lineHeight: 50,
                fontWeight: "bold",
              }}
            >
              Tomato Apps
            </H1>
            <Icon
              type="MaterialCommunityIcons"
              name="food"
              style={{
                color: Colors.primaryColor,
                fontSize: 80,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 22,
              paddingVertical: 11,
              paddingHorizontal: 20,
              // justifyContent: "center",
              marginTop: 58,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                opacity: 0.2,
                borderRadius: 22,
                ...StyleSheet.absoluteFillObject,
              }}
            />
            <Icon
              type="Feather"
              name="user"
              style={{
                color: Colors.primaryColor,
                fontSize: 17,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                marginRight: 10,
              }}
            />
            <TextInput
              autoCapitalize="none"
              placeholderTextColor="lightgrey"
              style={{
                fontSize: 17,
                color: "gray",
                lineHeight: 19,
              }}
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <Button
            onPress={loginBtnHandler}
            containerStyle={{ marginTop: 40 }}
            size="lg"
          >
            ENTER
          </Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
