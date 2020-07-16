import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import TextUI from "../../components/Text/TextUI";
import Colors from "../../constants/Colors";
import { Icon } from "native-base";
import Header from "../../components/General/Header";
import Image from "react-native-scalable-image";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default (props) => {
  // const { postData } = props.route.params;

  const { postDetailData } = props.route.params;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView />
      <Header {...props} title={postDetailData.restaurantName} />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ maxHeight: 540 }}
          width={width}
          source={{ uri: postDetailData.image }}
        />
        <View style={{ ...styles.commentContainer }}>
          <TextUI
            size="sm"
            style={{ height: null, color: Colors.backgroundColor }}
          >
            Rating : {postDetailData.address}
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI
            size="sm"
            style={{ height: null, color: Colors.backgroundColor }}
          >
            Address : {postDetailData.address}
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI
            size="sm"
            style={{ height: null, color: Colors.backgroundColor }}
          >
            Cuisine : {postDetailData.cuisine}
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI
            size="sm"
            style={{ height: null, color: Colors.backgroundColor }}
          >
            Open : {postDetailData.openTime} AM to {postDetailData.closeTime} PM
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI
            size="sm"
            style={{ height: null, color: Colors.backgroundColor }}
          >
            Cost For 2 : {postDetailData.costForTwo}
          </TextUI>
        </View>
      </ScrollView>
    </View>
  );
};
