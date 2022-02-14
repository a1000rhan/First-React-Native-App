import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Center, VStack } from "native-base";

const CartItem = ({ cart }) => {
  return (
    <VStack space={4} alignItems="center">
      <Center
        style={styles.cartcontain}
        bg="indigo.300"
        rounded="md"
        shadow={3}
      >
        <View style={styles.cartItem}>
          <Image style={styles.cartImag} source={{ uri: cart.product.image }} />
          <Text style={styles.label}>{cart.product.name}</Text>
          <Text style={styles.label2}>Price: {cart.product.price} KD</Text>
          <Text style={styles.label2}>Qty:{cart.quantity}</Text>
        </View>
      </Center>
    </VStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartImag: {
    width: 50,
    height: 50,
  },
  cartcontain: {
    width: "100%",
    margin: 5,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  label2: {
    marginLeft: 10,
  },
});
