import data from "../data";
import React from "react";
import { generator } from "../utils/generator";
import { useRecoilValue } from "recoil";

export default function RootContainer() {
  // data will be the Recoil state here that we'll update
  // through out our application

  const domData = useRecoilValue(data);

  const div = React.createElement("div", {
    id: "root-container",
    children: generator(domData)
  });
  return div;
}
