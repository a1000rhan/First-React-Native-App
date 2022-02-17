import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shopImage: {
    top: 4,
    width: 150,
    height: 100,
    alignSelf: "center",
    borderRadius: 10,
  },
  textShop: {
    fontSize: 30,
    marginRight: 20,
  },

  list: {
    display: "flex",
    margin: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  vsto: {
    width: "100%",
  },
  shops: {
    display: "flex",
    margin: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shopDetailImage: {
    width: "70%",
    height: 150,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 5,
    borderRadius: 10,
  },
  prodText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20,
  },
});
export default styles;
