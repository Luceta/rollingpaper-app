import React from "react";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";

import Mypage from "../screens/Mypage";
import Home from "../screens/Home";
import { MainPage } from "../screens/MainPage";

import theme from "../theme/theme";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      initialRouteN
      name="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark
            ? theme.darkTheme.BLACK_COLOR
            : theme.colors.white,
        },
        tabBarActiveTintColor: isDark ? theme.colors.kakaoYellow : "tomato",
        tabBarInactiveTintColor: isDark
          ? theme.darkTheme.DARK_GREY
          : theme.darkTheme.LIGHT_GREY,
        headerStyle: {
          backgroundColor: isDark
            ? theme.darkTheme.BLACK_COLOR
            : theme.colors.white,
        },
        headerTitleStyle: {
          color: isDark ? theme.colors.white : "tomato",
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "400",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="md-home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Add Paper"
        component={MainPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-add-circle" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarIcon: ({ color, size }) => {
            console.log(color, "color mypage");
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
