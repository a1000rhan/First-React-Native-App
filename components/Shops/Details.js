import React from "react";
import { Text, SafeAreaView, Image } from "react-native";
import shopStore from "../../Store/shopStore";
import ProductList from "../Products/ProductList";
import { observer } from "mobx-react";
import { Spinner, View } from "native-base";
import styles from "./shopStyles";

const Details = ({ route }) => {
  if (shopStore.loading) {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }

  const shop = route.params.shop;

  return (
    <View>
      <SafeAreaView>
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
