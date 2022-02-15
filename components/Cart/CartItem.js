import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Center, VStack } from "native-base";
import NumericInput from "react-native-numeric-input";

const CartItem = ({ cart }) => {
  const [Qty, setQty] = useState(1);

  const handleAdd = () => {
    const newItem = { Qty, product: cart.product._id };
    console.log("handleAdd -> newItem", newItem);
  };
  return (
    <VStack space={4} alignItems="center">
      <Center style={styles.cartcontain} bg="#F5EEDC" rounded="md" shadow={3}>
        <View style={styles.cartItem}>
          <Image style={styles.cartImag} source={{ uri: cart.product.image }} />
          <Text style={styles.label}>{cart.product.name}</Text>
          <Text style={styles.label2}>Price: {cart.product.price} KD</Text>
          <NumericInput
            value={Qty}
            rounded
            totalHeight={30}
            totalWidth={60}
            initValue={1}
            name={cart.product._id}
            onChange={setQty}
          />
          <Button onPress={handleAdd}>Add</Button>
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
    alignSelf: "stretch",
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
