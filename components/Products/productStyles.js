import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  products: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productName: {
    fontSize: 20,
  },
  card: {
    width: 140,
  },
  productNameDetail: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  productImage: {
    width: "100%",
    height: 100,
    marginRight: 20,
  },
  detailIamge: {
    width: "70%",
    height: 150,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 5,
    borderRadius: 10,
  },
  detailItem: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardText: {
    width: 100,
    height: 70,
  },
});

export default styles;
