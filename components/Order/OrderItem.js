import { VStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductItem from "../Products/ProductItem";

const OrderItem = ({ order }) => {
  console.log("🚀 ~ file: OrderItem.js ~ line 7 ~ OrderItem ~ order", order);
  const products = order.map((product) => (
    <ProductItem product={product.product} key={order._id} />
  ));
  return <View>{products}</View>;
};

export default OrderItem;
