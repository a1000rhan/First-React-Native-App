import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShopList from "./Shops/ShopList";
import Details from "./Shops/Details";
import CartList from "./Cart/CartList";

import Home from "../Home";
import CartButton from "./button/CartButton";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: () => <CartButton />,
          headerStyle: {
            backgroundColor: "#F9E4D4",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Shops" component={ShopList} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            headerTitle: route.params.shop.name,
          })}
        />
        <Stack.Screen name="CartList" component={CartList} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
