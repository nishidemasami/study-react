import React from "react";
import { shallowEqual } from "react-redux";
import "./App.scss";
import Count from "./components/Count";
import Menu from "./components/Menu";
import SpinLogo from "./components/SpinLogo";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App(): JSX.Element {
  const { appState } = useAppSelector(
    (state: RootState) => state,
    shallowEqual
  );

  return (
    <>
      <React.StrictMode>
        <div className="App">
          <header className="App-header">
            {appState.component === "count" ? (
              <Count />
            ) : appState.component === "spinLogo" ? (
              <SpinLogo />
            ) : null}
          </header>
        </div>
      </React.StrictMode>
      <Menu />
    </>
  );
}

export default App;
