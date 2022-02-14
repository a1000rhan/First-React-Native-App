import React from "react";
import { StyleSheet, Text, View } from "react-native";
import shopStore from "../../Store/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

const ShopList = ({ navigation }) => {
  if (shopStore.loading) {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }
  const shopli = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));

  return (
    <View>
      <View>{shopli}</View>
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
