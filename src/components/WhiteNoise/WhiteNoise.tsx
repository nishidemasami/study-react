import styled from "@emotion/styled";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Slider,
	TextField,
} from "@mui/material";
import React from "react";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions, Wave, Waves } from "../../redux/state/whiteNoise";
import { RootState } from "../../redux/store";
import { AppContext } from "../App/App";
import { useOnChangeFrequency, useOnClickToStartAndStop } from "./hook";

/** 良い幅のスライダー */
const GoodWidthSlider = styled(Slider)`
	max-width: 50%;
`;

const WhiteNoise: React.VFC = () => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const dispatch = useDispatch();

	const { audioContext } = React.useContext(AppContext);

	const [gainNode] = React.useState<GainNode>(audioContext.createGain());

	useOnChangeFrequency(gainNode);

	return (
		<>
			<p>
				<Button
					color={whiteNoiseState.playing ? "warning" : "primary"}
					onClick={useOnClickToStartAndStop(gainNode)}
					variant="contained"
				>
					{whiteNoiseState.wave === "WhiteNoise"
						? "ホワイトノイズ"
						: whiteNoiseState.wave === "Sine"
						? `サイン波(${whiteNoiseState.frequency}Hz)`
						: `矩形波(${whiteNoiseState.frequency}Hz)`}
					{whiteNoiseState.playing ? "停止" : "再生"}
				</Button>
			</p>
			<p>音量</p>
			<p>
				<VolumeDown />
				<GoodWidthSlider
					aria-labelledby="continuous-slider"
					max={100}
					min={0}
					onChange={(event, newValue) => {
						if (typeof newValue === "number") {
							dispatch(actions.setVolume(newValue));
							if (gainNode) {
								gainNode.gain.value = newValue / 100;
							}
						}
					}}
					value={whiteNoiseState.volume}
					valueLabelDisplay="auto"
				/>
				<VolumeUp />
			</p>
			<FormControl component="fieldset">
				<FormLabel component="legend">再生する音の種類</FormLabel>
				<RadioGroup
					aria-label="wave"
					name="radio-buttons-group"
					onChange={(e, value) => {
						if ((Waves as Readonly<Array<string>>).includes(value)) {
							dispatch(actions.setWave(value as Wave));
						}
					}}
					value={whiteNoiseState.wave}
				>
					<FormControlLabel
						control={<Radio />}
						label={`サイン波(${whiteNoiseState.frequency}Hz)`}
						value="Sine"
					/>
					<FormControlLabel
						control={<Radio />}
						label={`矩形波(${whiteNoiseState.frequency}Hz)`}
						value="Square"
					/>
					<FormControlLabel
						control={<Radio />}
						label="ホワイトノイズ"
						value="WhiteNoise"
					/>
				</RadioGroup>
			</FormControl>
			{whiteNoiseState.wave !== "WhiteNoise" && (
				<>
					<p>周波数</p>
					<TextField
						label="周波数"
						onChange={(element) =>
							dispatch(
								actions.setFrequency(Number(element.currentTarget.value))
							)
						}
						required
						type="number"
						value={whiteNoiseState.frequency}
					/>
					<p>
						<GoodWidthSlider
							aria-labelledby="continuous-slider"
							max={4186}
							min={27.5}
							onChange={(event, newValue) => {
								if (typeof newValue === "number") {
									dispatch(actions.setFrequency(newValue));
								}
							}}
							value={whiteNoiseState.frequency}
							valueLabelDisplay="auto"
						/>
					</p>
				</>
			)}
		</>
	);
};

export default WhiteNoise;