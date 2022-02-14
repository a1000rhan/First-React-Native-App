import React from "react";
import { Button } from "native-base";
import { StyleSheet, Text, SafeAreaView, Image, Alert } from "react-native";

const ShopItem = ({ shop, navigation }) => {
  return (
    <SafeAreaView>
      <Image style={styles.shopImage} source={{ uri: shop.image }} />
      <Text style={styles.textShop}>{shop.name}</Text>
      <Button
        style={styles.button}
        onPress={() => {
          Alert.alert("Shops");
        }}
      >
        Click
      </Button>
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
  },
  button: {
    width: "50%",
    alignSelf: "center",
  },
});
