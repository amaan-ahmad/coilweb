import { atom } from "recoil";

export const panelUI = atom({
  key: "panelUI",
  default: {
    width: 200,
    padding: "0.4rem"
  }
});
