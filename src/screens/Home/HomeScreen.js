import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import PostCard from "./PostCard";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import LoginBG from "../../../assets/images/login_bg.png";
import { Icon } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/General/Header";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "flex-end",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);

  const userSelector = useSelector((state) => state.user);

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`, {
      // params: {
      //   include: "User",
      // },
    })
      .then((res) => {
        console.log(res.data);
        setPostList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPosts = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      {/* <SearchBar navigation={navigation} /> */}

      <Header
        title={`Hello, ` + userSelector.username}
        style={{ ...styles.header }}
      />
      <FlatList
        ListHeaderComponent={() => {
          return (
            <H1 style={{ color: Colors.backgroundColor }} bold>
              Restaurants
            </H1>
          );
        }}
        ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 46 }}
        data={postList}
        renderItem={renderPosts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};
