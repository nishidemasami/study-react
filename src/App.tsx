import {
  Button,
  CircularProgress,
  Slider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { shallowEqual } from "react-redux";
import "./App.scss";
import logo from "./logo.svg";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrement, increment, setShowingPercent } from "./redux/state/count";
import { RootState } from "./redux/store";
import fetchLastCounter from "./redux/thunk/fetchCounter";

function App(): JSX.Element {
  const { countState } = useAppSelector(
    (state: RootState) => state,
    shallowEqual
  );
  const dispatch = useAppDispatch();

  /** まわるかどうかフラグ */
  const [spin, setSpin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="logo"
          className={spin ? "App-logo-spin" : "App-logo"}
          src={logo}
        />
        <p>
          <Button
            color="primary"
            onClick={() => {
              setSpin(!spin);
            }}
            variant="contained"
          >
            {spin ? "止める" : "まわす"}
          </Button>
        </p>
        <p>{countState.count}</p>
        <p>
          <Button
            color="primary"
            onClick={() => {
              dispatch(increment());
            }}
            variant="contained"
          >
            増やす
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              dispatch(decrement());
            }}
            variant="contained"
          >
            減らす
          </Button>
        </p>
        <Typography id="percent-slider-label">
          確率：{countState.percent}%
        </Typography>
        <Slider
          aria-labelledby="percent-slider-label"
          className="App-percent-slider"
          disabled={countState.progress}
          max={100}
          min={0}
          onChange={(e, newValue: number | number[]) =>
            dispatch(setShowingPercent(newValue as number))
          }
          value={countState.percent}
          valueLabelDisplay="off"
        />
        <p>
          <Button
            color="default"
            disabled={countState.progress}
            onClick={() => {
              dispatch(
                fetchLastCounter({
                  percent: countState.percent,
                  value: 100,
                  second: 3,
                })
              );
            }}
            variant="contained"
          >
            非同期
          </Button>
        </p>
        <Typography color="error">{countState.message}</Typography>
        {countState.progress && <CircularProgress />}
      </header>
    </div>
  );
}

export default App;
