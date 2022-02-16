import React from "react";
import { View } from "react-native";
import styles from "./productStyles";
import { observer } from "mobx-react";

import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productLis = products.map((product) => (
    <ProductItem key={product._id} product={product} />
  ));
  // console.log(
  //   "🚀 ~ file: ProductList.js ~ line 12 ~ ProductList ~ productLis",
  //   productLis
  // );
  return <View style={styles.products}>{productLis}</View>;
};

export default observer(ProductList);
