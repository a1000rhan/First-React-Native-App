import { VStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductItem from "../Products/ProductItem";
import styles from "./orderStyles";

const OrderItem = ({ order }) => {
  console.log("🚀 ~ file: OrderItem.js ~ line 7 ~ OrderItem ~ order", order);
  const products = order.map((product) => (
    <ProductItem product={product.product} key={product._id} />
  ));
  return (
    <View>
      <Text style={styles.txt}>Order:</Text>
      <View style={styles.OrderGrid}>{products}</View>
    </View>
  );
};

export default OrderItem;
