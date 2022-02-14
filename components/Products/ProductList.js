import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productLis = products.map((product) => (
    <ProductItem key={product._id} product={product} />
  ));
  return <View>{productLis}</View>;
};

export default ProductList;

const styles = StyleSheet.create({});
