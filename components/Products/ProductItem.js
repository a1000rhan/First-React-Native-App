import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Image
        source={{
          uri: product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
