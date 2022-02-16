import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { Center, VStack } from "native-base";
import styles from "./orderStyles";
import OrderItem from "./OrderItem";
import orderStore from "../../Store/orderStore";

const OrderList = () => {
  const orderList = orderStore.orders.map((order) => (
    <OrderItem order={order} key={order._id} />
  ));
  return (
    <Center flex={1} px="3">
      <VStack space="5">{orderList}</VStack>
      <Text>Hello</Text>
    </Center>
  );
};
export default observer(OrderList);
