import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import cartStore from "../../Store/cartStore";
import styles from "./productStyles";

const ProductItem = ({ product }) => {
  const handlePress = () => {
    const newItem = {
      product: product,
      quantity: product.quantity,
    };
    cartStore.addItemToCart(newItem);
  };
  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text style={styles.productName}>{product.name}</Text>
        <Image
          source={{
            uri: product.image,
          }}
          alt="image"
          style={styles.productImage}
        />
      </Pressable>
    </View>
  );
};

export default ProductItem;
