import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ShopList from "../components/Shops/ShopList";
import { NativeBaseProvider } from "native-base";
import Details from "../components/Shops/Details";

const image = {
  uri: "https://html.sammy-codes.com/images/background.jpg",
};

const Home = () => {
  return (
    <NativeBaseProvider style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.appbar} />
        {/* <ShopList /> */}
        <Details />
      </ImageBackground>
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
  bottom: {
    backgroundColor: "#52B4D1",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  appbar: {
    backgroundColor: "#D67D3E",
    height: 100,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
