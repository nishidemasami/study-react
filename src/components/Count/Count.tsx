import {
  Button,
  CircularProgress,
  Slider,
  Typography,
} from "@material-ui/core";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import {
  decrement,
  increment,
  setShowingPercent,
} from "../../redux/state/count";
import { RootState } from "../../redux/store";
import fetchLastCounter from "../../redux/thunk/fetchCounter";
import "./Count.scss";

function Count(): JSX.Element {
  const { countState } = useSelector((state: RootState) => state, shallowEqual);
  const dispatch = useDispatch();

  return (
    <>
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
        className="Count-percent-slider"
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
    </>
  );
}

export default Count;
