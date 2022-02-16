import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import OrdersList from "./Order/OrderList";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../Store/authStore";
import { observer } from "mobx-react";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      {authstore.user && (
        <Tab.Screen
          name="OrderList"
          component={OrdersList}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={{ color }} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default observer(TabNavigator);
