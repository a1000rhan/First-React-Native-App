import { VStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductItem from "../Products/ProductItem";

const OrderItem = ({ order }) => {
  const products = order.products.map((item) => (
    <ProductItem product={item.product} />
  ));
  return (
    <VStack w="100%" alignItems="center" space="3">
      {products}
    </VStack>
  );
};

export default OrderItem;
