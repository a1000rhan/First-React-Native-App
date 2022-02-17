import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { Center, VStack, ScrollView } from "native-base";

import styles from "./orderStyles";
import OrderItem from "./OrderItem";
import orderStore from "../../Store/orderStore";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderList = () => {
  const orderList = orderStore.orders.map((order) => (
    <OrderItem order={order} key={order._id} />
  ));
  return (
    <SafeAreaView style={styles.OrderGrid}>
      <ScrollView>{orderList}</ScrollView>
    </SafeAreaView>
  );
};
export default observer(OrderList);
