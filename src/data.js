import { atom } from "recoil";

const data = atom({
  key: "DOMdata",
  default: [
    {
      tag: "strong",
      properties: {
        children: "Try adding a new heading ⭐"
      }
    }
  ]
});

export default data;
