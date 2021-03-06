import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopList from "./Shops/ShopList";
import Details from "./Shops/Details";
import CartList from "./Cart/CartList";
import Home from "../Home";
import CartButton from "./button/CartButton";
import OrderList from "./Order/OrderList";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import authstore from "../Store/authStore";
import ProductDetail from "./Products/ProductDetail";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  if (authstore.loading) {
    <Text>Loading</Text>;
  }
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: () => <CartButton />,
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
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({ route }) => ({
            headerTitle: route.params.product.name,
          })}
        />
        <Stack.Screen name="CartList" component={CartList} />

        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerTitle: "Sign In" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerTitle: "Sign Up" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
