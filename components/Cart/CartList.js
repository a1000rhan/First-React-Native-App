import React from "react";
import { View } from "react-native";
import carStore from "../../Store/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button, Center, VStack } from "native-base";
import styles from "./cartStyles";
import cartStore from "../../Store/cartStore";

const CartList = () => {
  const ListOfInCart = carStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return (
    <View>
      {ListOfInCart}
      <Button style={styles.checkoutBtn} onPress={cartStore.checkout}>
        Checkout
      </Button>
    </View>
  );
};

export default observer(CartList);
