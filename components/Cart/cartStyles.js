import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cartItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  cartImag: {
    width: 50,
    height: 50,
  },
  cartcontain: {
    width: "100%",
    padding: 5,
    margin: 5,
    alignItems: "flex-start",
  },
  itemText: {
    fontWeight: "bold",
    flex: 1,
  },
  priceAndQ: {
    marginLeft: 10,
  },
  addBtn: {
    textAlign: "center",
  },
  Btn: {
    textAlign: "center",
    margin: 5,
  },
  checkoutBtn: {
    width: "60%",
    marginTop: 30,
    alignSelf: "center",
  },
});
export default styles;
