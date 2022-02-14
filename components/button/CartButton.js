import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const CartButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Icon.Button
        name="shopping-cart"
        size={30}
        onPress={() => navigation.navigate("CartList")}
      />
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
