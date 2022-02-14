import { makeAutoObservable } from "mobx";
import api from "./api";

class ShopStore {
  shops = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const res = await api.get("/shops");
      this.shops = res.data;
    } catch (e) {
      console.log(e);
    }
  };
}
const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
