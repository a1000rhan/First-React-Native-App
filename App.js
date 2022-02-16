import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/TabNavigator";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider>
          <TabNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  appbar: {
    backgroundColor: "#9C0F48",
    height: 100,
    width: "100%",
  },
  image: {
    flex: 1,
    backgroundColor: "#D67D3E",
    justifyContent: "flex-start",
  },
});
