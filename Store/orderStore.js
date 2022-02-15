import { makeAutoObservable } from "mobx";
import api from "./api";
class OrderStore {
  orders = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchOrders = async () => {
    try {
      const response = await api.get("/orders");
      this.orders = response.data;
    } catch (error) {
      console.error("OrderStore -> fetchOrders -> error", error);
    }
  };
}
const orderStore = new OrderStore();
orderStore.fetchOrders();
export default orderStore;
