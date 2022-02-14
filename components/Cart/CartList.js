import React from "react";
import { StyleSheet, Text, View } from "react-native";
import items from "../../cartStore";
import CartItem from "./CartItem";

const CartList = () => {
  const ListOfInCart = items.map((cart) => (
    <CartItem cart={cart} key={cart.product._id} />
  ));
  return <View>{ListOfInCart}</View>;
};

export default CartList;

const styles = StyleSheet.create({});
