import React from "react";

export function generator(data) {
  let result = [];
  data.forEach((elem) => {
    result.push(React.createElement(elem.tag, elem.properties));
  });
  return result;
}
