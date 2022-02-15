import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  products: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productName: {
    fontSize: 20,
  },
  productImage: { width: 100, height: 100, marginRight: 20, borderWidth: 5 },
});
