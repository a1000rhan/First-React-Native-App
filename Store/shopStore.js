import { makeAutoObservable } from "mobx";
import api from "./api";

class ShopStore {
  shops = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const res = await api.get("/shops");
      this.shops = res.data;
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  };
}
const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
