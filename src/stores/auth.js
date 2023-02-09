import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { showPopup: false, login: "", name: "", password: "" };
  },

  actions: {
    changeVisible() {
      this.showPopup = !this.showPopup;
    },
  },
});
