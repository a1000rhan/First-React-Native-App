import React from "react";
import { StyleSheet, Text, View } from "react-native";
import shopStore from "../../Store/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import { ScrollView, Spinner } from "native-base";
import styles from "./shopStyles";

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
    <ScrollView>
      <View>{shopli}</View>
    </ScrollView>
  );
};

export default observer(ShopList);
