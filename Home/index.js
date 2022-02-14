import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ShopList from "../components/Shops/ShopList";
import { NativeBaseProvider } from "native-base";
import Details from "../components/Shops/Details";

const Home = () => {
  return (
    <NativeBaseProvider style={styles.container}>
      <View style={styles.image}>
        <View style={styles.appbar} />
        {/* <ShopList /> */}
        <Details />
      </View>
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(100,100,100,1)",
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
