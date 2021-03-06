import styled from "@emotion/styled";
import { Button, CircularProgress, Slider, Typography } from "@mui/material";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions } from "../../redux/state/count";
import { RootState } from "../../redux/store";
import fetchLastCounter from "../../redux/thunk/fetchCounter";

/** 良い幅のスライダー */
const GoodWidthSlider = styled(Slider)`
	max-width: 50%;
`;

const Count: React.VFC = () => {
	const { countState } = useSelector((state: RootState) => state, shallowEqual);
	const dispatch = useDispatch();

	return (
		<>
			<p>{countState.count}</p>
			<p>
				<Button
					color="primary"
					onClick={() => {
						dispatch(actions.increment());
					}}
					variant="contained"
				>
					増やす
				</Button>
				<Button
					color="secondary"
					onClick={() => {
						dispatch(actions.decrement());
					}}
					variant="contained"
				>
					減らす
				</Button>
			</p>
			<Typography id="percent-slider-label">
				確率：{countState.percent}%
			</Typography>
			<GoodWidthSlider
				aria-labelledby="percent-slider-label"
				disabled={countState.progress}
				max={100}
				min={0}
				onChange={(e, newValue) => {
					if (typeof newValue === "number") {
						dispatch(actions.setShowingPercent(newValue));
					}
				}}
				value={countState.percent}
				valueLabelDisplay="off"
			/>
			<p>
				<Button
					color="info"
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
};

export default Count;
