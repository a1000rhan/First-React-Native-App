import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { observer } from "mobx-react";
import shopStore from "../../Store/shopStore";
import styles from "./productStyles";
import { Center, HStack, ScrollView, Spinner, useToast } from "native-base";
import NumericInput from "react-native-numeric-input";
import Icon from "react-native-vector-icons/FontAwesome";
import cartStore from "../../Store/cartStore";

const ProductDetail = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();
  if (shopStore.loading) {
    <Center>
      <Spinner accessibilityLabel="Loading posts" />;
    </Center>;
  }
  const handleAdd = () => {
    const newItem = {
      product: product,
      quantity: quantity,
    };
    cartStore.addItemToCart(newItem);
    toast.show({
      title: `${product.name} is Added`,
      status: "success",
      description: `${quantity}`,
    });
    setQuantity(1);
  };
  const product = route.params.product;
  return (
    <ScrollView>
      <Image source={{ uri: product.image }} style={styles.detailIamge} />
      <Text style={styles.productNameDetail}>{product.name}</Text>
      <Text style={{ fontWeight: "bold" }}> Description: </Text>
      <Text style={{ margin: 15, textAlign: "left" }}>
        {" "}
        {product.description}
      </Text>
      <Center style={styles.detailItem}>
        <Text> price: {product.price} Kd</Text>
        <NumericInput
          value={quantity}
          rounded
          totalHeight={30}
          totalWidth={60}
          onChange={setQuantity}
        />
        <View style={styles.Btn}>
          <Icon.Button
            name="plus"
            size={20}
            onPress={handleAdd}
            backgroundColor="#52B4D1"
          />
        </View>
      </Center>
    </ScrollView>
  );
};

export default observer(ProductDetail);
