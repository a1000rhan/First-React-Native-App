import React, { useState } from "react";
import { Text, View } from "react-native";
import { Avatar, Button, Center, VStack, useToast } from "native-base";

import cartStore from "../../Store/cartStore";
import styles from "./cartStyles";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/FontAwesome";

const CartItem = ({ item }) => {
  const toast = useToast();

  const handleDelete = () => {
    cartStore.removeItemFromCart(item.product._id);
    toast.show({
      title: `${item.product.name} is Deleted`,
      status: "info",
    });
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
