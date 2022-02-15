import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "native-base";
import { observer } from "mobx-react";

import cartStore from "../../Store/cartStore";
const CartButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <>
        {cartStore.totalQuantity === 0 ? (
          <Text></Text>
        ) : (
          <Badge
            bg="red.400"
            colorScheme="danger"
            rounded="999px"
            mb={-2}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 12,
            }}
          >
            {cartStore.totalQuantity}
          </Badge>
        )}

        <Icon
          name="shopping-cart"
          size={30}
          style={styles.cartButton}
          onPress={() => navigation.navigate("CartList")}
        />
      </>
    </View>
  );
};

export default observer(CartButton);

const styles = StyleSheet.create({});
