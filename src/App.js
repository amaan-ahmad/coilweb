import "./styles.css";
import { RecoilRoot } from "recoil";
import { ControlPanel } from "./components/controller";
import RootContainer from "./components/RootContainer";

export default function App() {
  return (
    <RecoilRoot>
      <ControlPanel />
      <RootContainer />
    </RecoilRoot>
  );
}
