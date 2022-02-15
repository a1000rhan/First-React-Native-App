import React, { useState } from "react";
import { Text, View } from "react-native";
import { Avatar, Button, Center, VStack } from "native-base";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../Store/cartStore";
import styles from "./cartStyles";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/FontAwesome";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = () => {
    const newItem = {
      product: item.product,
      quantity: quantity,
    };
    cartStore.addItemToCart(newItem);
  };
  const handleDelete = () => {
    cartStore.removeItemFromCart(item.product._id);
  };

  return (
    <VStack>
      <Center style={styles.cartcontain} bg="#F5EEDC" rounded="md" shadow={3}>
        <View style={styles.cartItem}>
          <Avatar
            style={styles.cartImag}
            source={{ uri: item.product.image }}
          />
          <Text style={styles.itemText}>{item.product.name}</Text>
          <Text style={styles.priceAndQ}>Price: {item.product.price}, KD</Text>

          <NumericInput
            value={quantity}
            rounded
            totalHeight={30}
            totalWidth={60}
            onChange={(value) => setQuantity(value)}
          />
          <View style={styles.Btn}>
            <Icon.Button
              name="plus"
              size={20}
              onPress={handleAdd}
              backgroundColor="#52B4D1"
            />
          </View>
          <View style={styles.Btn}>
            <Icon.Button
              name="trash"
              backgroundColor="red"
              size={20}
              onPress={handleDelete}
            />
          </View>
        </View>
      </Center>
    </VStack>
  );
};

export default observer(CartItem);
