import React from "react";
import { View } from "react-native";
import styles from "./productStyles";

import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productLis = products.map((product) => (
    <ProductItem key={product._id} product={product} />
  ));
  return <View style={styles.products}>{productLis}</View>;
};

export default ProductList;
