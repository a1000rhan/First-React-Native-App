import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import cartStore from "../../Store/cartStore";
import styles from "./productStyles";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const ProductItem = ({ product }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // const newItem = {
    //   product: product,
    //   quantity: product.quantity,
    // };
    // cartStore.addItemToCart(newItem);
    navigation.navigate("ProductDetail", { product: product });
  };

  return (
    <Card style={styles.card}>
      <Pressable onPress={handlePress}>
        <Card.Title title={product.name} />
        <Card.Cover
          source={{
            uri: product.image,
          }}
          alt="image"
          style={styles.productImage}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;
