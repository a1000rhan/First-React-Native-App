import React from "react";
import { StyleSheet, Text, View } from "react-native";
import shopStore from "../../Store/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";

const ShopList = () => {
  const shopli = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} />
  ));

  return <View>{shopli}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
