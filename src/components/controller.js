import styled from "styled-components";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { panelUI } from "../atoms/ui";
import data from "../data";

export const Panel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: ${(props) => props.ui.padding};
  width: ${(props) => props.ui.width}px;
  height: 100vh;
  background-color: cadetblue;
`;

export function ControlPanel() {
  const [input, setInput] = React.useState("");
  const [DOM, setDOM] = useRecoilState(data);
  const textChanged = (e) => {
    setInput(e.target.value);
  };

  const updateDOM = (tagElement) => {
    setDOM([
      ...DOM,
      {
        tag: tagElement,
        properties: {
          children: tagElement !== "img" ? input : null,
          src: tagElement === "img" ? input : null
        }
      }
    ]);
    setInput("");
  };

  const panelProps = useRecoilValue(panelUI);

  return (
    <React.Fragment>
      <Panel ui={panelProps}>
        <input type="text" name="tag" onChange={textChanged} value={input} />
        <button onClick={() => updateDOM("h1")}>Add this heading</button>
        <button onClick={() => updateDOM("p")}>Add this paragraph</button>
        <button onClick={() => updateDOM("img")}>Add this image</button>
      </Panel>
    </React.Fragment>
  );
}
