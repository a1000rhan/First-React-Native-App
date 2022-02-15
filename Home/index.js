import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import styles from "./styles";
const Home = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "http://www.krakowpost.com/wp-content/uploads/2018/03/closed-shop.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Button style={styles.btn} onPress={() => navigation.navigate("Shops")}>
          Lets Shop
        </Button>
      </ImageBackground>
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   btn: {
//     width: "50%",
//     alignSelf: "center",
//     top: "50%",
//   },
// });
