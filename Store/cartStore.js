import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import authstore from "./authStore";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];

  fetchCart = async () => {
    try {
      const cart = await AsyncStorage.getItem("myCart");
      this.items = cart ? JSON.parse(cart) : [];
    } catch (e) {
      console.log(e);
    }
  };
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

  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    try {
      const order = this.items.map((item) => {
        return {
          ...item,
          product: item.product._id,
        };
      });

      console.log(
        "🚀 ~ file: cartStore.js ~ line 52 ~ CartStore ~ newitems ~ newitems",
        order
      );

      const res = await api.post("/checkout", { order: order });

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
