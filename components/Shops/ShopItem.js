import React from "react";
import { Center, VStack } from "native-base";
import { Text, SafeAreaView, Image, Pressable } from "react-native";
import styles from "./shopStyles";

const ShopItem = ({ shop, navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        style={styles.list}
        onPress={() => {
          navigation.navigate("Details", { shop: shop });
        }}
      >
        <VStack style={styles.vsto}>
          <Center style={styles.shops} bg="#F5EEDC" rounded="lg" shadow={3}>
            <Image style={styles.shopImage} source={{ uri: shop.image }} />
            <Text style={styles.textShop}>{shop.name}</Text>
          </Center>
        </VStack>
      </Pressable>
    </SafeAreaView>
  );
};

export default ShopItem;
