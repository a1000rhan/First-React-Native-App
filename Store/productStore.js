import { makeAutoObservable } from "mobx";
import api from "./api";

class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }
  products = [];
  fetchShops = async () => {
    try {
      const res = await api.get("/products");
      this.products = res.data;
    } catch (e) {
      console.log(e);
    }
  };
}
const productStore = new ProductStore();
productStore.fetchShops();

export default productStore;
