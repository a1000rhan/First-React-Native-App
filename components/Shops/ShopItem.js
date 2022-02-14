import React from "react";
import { Button } from "native-base";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Alert,
  Pressable,
} from "react-native";

const ShopItem = ({ shop, navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        style={styles.list}
        onPress={() => {
          navigation.navigate("Details", { shop: shop });
        }}
      >
        <Image style={styles.shopImage} source={{ uri: shop.image }} />
        <Text style={styles.textShop}>{shop.name}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  shopImage: {
    top: 4,
    width: 150,
    height: 100,
    alignSelf: "center",
  },
  container: {
    flex: 1,
  },
  textShop: {
    fontSize: 30,
    textAlign: "center",
    marginRight: 30,
  },
  button: {
    width: "50%",
    alignSelf: "center",
  },
  list: {
    display: "flex",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
  },
});
