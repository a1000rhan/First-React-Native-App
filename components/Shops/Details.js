import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import shopStore from "../../Store/shopStore";
import ProductList from "../Products/ProductList";
import { observer } from "mobx-react";
import { Spinner, View } from "native-base";

const Details = () => {
  if (shopStore.loading) {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }
  const shop = shopStore.shops[0];
  console.log(shop);

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.shopTitle}>{shop.name}</Text>
        <Image source={{ uri: shop.image }} style={styles.shopDetailImage} />
        <View>
          <Text style={styles.prodText}>Products:</Text>
          <ProductList products={shop.products} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default observer(Details);

const styles = StyleSheet.create({
  shopDetailImage: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 5,
  },
  prodText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shopTitle: {
    width: "100%",
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
