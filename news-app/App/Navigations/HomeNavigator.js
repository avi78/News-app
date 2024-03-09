import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../Screen/Home";
import ReadNews from "../Screen/ReadNews";

const Stack = createStackNavigator();
function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="read-news" component={ReadNews} />
    </Stack.Navigator>
  );
}

export default HomeNavigator
