import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import Button from "../../components/Button/Button";
import AsyncStorage from "@react-native-community/async-storage";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 30,
  },
});

export default ({ navigation }) => {
  const [postCount, setPostCount] = useState(0);
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    AsyncStorage.removeItem("userData")
      .then((result) => {
        dispatch({
          type: "USER_LOGOUT",
        });
        console.log("LOGOUT!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ ...styles.container }}>
      <Button onPress={logoutHandler} size="lg">
        LOGOUT
      </Button>
    </View>
  );
};
