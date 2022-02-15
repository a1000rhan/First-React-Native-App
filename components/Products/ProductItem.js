import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import cartStore from "../../Store/cartStore";

const ProductItem = ({ product }) => {
  const handlePress = () => {
    cartStore.addItemToCart(product._id);
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

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
  },
  productImage: { width: 100, height: 100, marginRight: 20, borderWidth: 5 },
});
