import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import Colors from "../constants/Colors";
import { Icon } from "native-base";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        style: {
          borderTopWidth: 0,
          paddingTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type="Entypo" name="home" style={{ color, fontSize: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              type="MaterialCommunityIcons"
              name="silverware-fork-knife"
              style={{ color, fontSize: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
