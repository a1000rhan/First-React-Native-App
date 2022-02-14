import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import shopStore from "../../Store/shopStore";
import ProductList from "../Products/ProductList";
import { observer } from "mobx-react";
import { View } from "native-base";

const Details = () => {
  const shop = shopStore.shops[0];
  console.log(shop);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>{shop.name}</Text>
        <Image source={{ uri: shop.image }} style={styles.shopDetailImage} />
        <ProductList products={shop.products} />
      </SafeAreaView>
    </View>
  );
};

export default observer(Details);

const styles = StyleSheet.create({
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
