import React from "react";
import { shallowEqual } from "react-redux";
import "./App.scss";
import Menu from "./components/Menu";
import MenuItems from "./components/Menu/MenuItems";
import { useSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App(): JSX.Element {
  const { appState } = useSelector((state: RootState) => state, shallowEqual);
  return (
    <>
      <React.StrictMode>
        <div className="App">
          <header className="App-header">
            {MenuItems[appState.component].component}
          </header>
        </div>
      </React.StrictMode>
      <Menu />
    </>
  );
}

export default App;
