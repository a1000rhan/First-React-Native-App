import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import authstore from "./authStore";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];

  addItemToCart = async (newItem) => {
    try {
      const foundItem = this.items.find(
        (item) => item.product._id === newItem.product._id
      );
      if (foundItem) foundItem.quantity = newItem.quantity;
      else this.items.push(newItem);

      await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    } catch (e) {
      console.log(e);
    }
  };
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  fetchCart = async () => {
    try {
      const items = await AsyncStorage.getItem("myCart");
      this.items = items ? JSON.parse(items) : [];
    } catch (e) {
      console.log(e);
    }
  };

  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    try {
      console.log(
        "🚀 ~ file: cartStore.js ~ line 69 ~ CartStore ~ newitems ~ this.items",
        this.items
      );
      const newitems = this.items.map((item) => {
        return {
          ...item,
          product: item.product._id,
          owner: authstore.user._id,
        };
      });

      const res = await api.post("/checkout", newitems);
      console.log(
        "🚀 ~ file: cartStore.js ~ line 81 ~ CartStore ~ checkout= ~ res",
        res.data
      );

      this.items = [];

      await AsyncStorage.removeItem("myCart");
    } catch (error) {
      console.log(error);
    }
  };
}
const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
