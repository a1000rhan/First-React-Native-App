import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text style={styles.productName}>{product.name}</Text>
      <Image
        source={{
          uri: product.image,
        }}
        alt="image"
        style={styles.productImage}
      />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
  },
  productImage: { width: 100, height: 100, marginRight: 20, borderWidth: 5 },
});
