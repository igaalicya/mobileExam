import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import PostDetailScreen from "../screens/PostDetail/PostDetailScreen";
// import CreatePostScreen from "../screens/CreatePostScreen/CreatePostScreen";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={PostDetailScreen} name="HomePostDetail" />
      {/* <Stack.Screen component={CreatePostScreen} name="CreatePost" /> */}
    </Stack.Navigator>
  );
};
