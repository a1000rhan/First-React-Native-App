import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import ShopList from "./components/Shops/ShopList";
import { NativeBaseProvider } from "native-base";
import Details from "./components/Shops/Details";
import shopStore from "./Store/shopStore";
import { Provider as PaperProvider } from "react-native-paper";
import { Appbar } from "react-native-paper";

export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      <View style={styles.appbar} />
      <ShopList />
      {/* <Details /> */}
      <PaperProvider>
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon="archive"
            onPress={() => console.log("Pressed archive")}
          />
          <Appbar.Action
            icon="mail"
            onPress={() => console.log("Pressed mail")}
          />
          <Appbar.Action
            icon="label"
            onPress={() => console.log("Pressed label")}
          />
          <Appbar.Action
            icon="delete"
            onPress={() => console.log("Pressed delete")}
          />
        </Appbar>
      </PaperProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "#52B4D1",
    height: 100,
    width: "100%",
  },
});
