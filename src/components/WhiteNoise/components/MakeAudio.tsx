import styled from "@emotion/styled";
import {
	ExpandLess,
	ExpandMore,
	VolumeDown,
	VolumeUp,
} from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	Button,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Slider,
	TextField,
} from "@mui/material";
import React from "react";
import { AppContext } from "../../App/App";
import { FlexColumn } from "../../Common/Styled";
import {
	MakeAudioContextProps,
	useMakeAudioContext,
	useOnChangeFrequency,
	useOnChangeVolume,
	useOnClickToStartAndStop,
	Wave,
	Waves,
} from "./MakeAudio.hook";

export const MakeAudioContext = React.createContext(
	{} as MakeAudioContextProps
);

/** MakeAudioPaper */
const MakeAudioPaper = styled(Paper)`
	margin: 5px;
	display: inline-block;
`;

/** 良い幅のスライダー */
const GoodWidthSlider = styled(Slider)`
	max-width: 50%;
`;

/** 再生ボタン */
const PlayingButton = styled(Button)`
	margin: 5px;
`;

const WhiteNoise: React.VFC = () => {
	const { playing, wave, frequency, setVolume, setWave, setFrequency, volume } =
		React.useContext(MakeAudioContext);
	const { audioContext } = React.useContext(AppContext);

	const [gainNode] = React.useState<GainNode>(audioContext.createGain());

	useOnChangeFrequency(gainNode);

	useOnChangeVolume(gainNode);

	const [freqSlider, setFreqSlider] = React.useState(Math.sqrt(frequency));

	const [frequencyText, setFrequencyText] = React.useState<string>(
		String(frequency)
	);
	const [frequencyTextError, setFrequencyTextError] = React.useState(false);
	const [open, setOpen] = React.useState(false);

	return (
		<Accordion expanded={open}>
			<div>
				<PlayingButton
					color={playing ? "warning" : "primary"}
					onClick={useOnClickToStartAndStop(gainNode)}
					variant="contained"
				>
					{wave === "WhiteNoise"
						? "ホワイトノイズ"
						: wave === "Sine"
						? `サイン波(${frequency}Hz)`
						: wave === "Square"
						? `矩形波(${frequency}Hz)`
						: wave === "Triangle"
						? `三角波(${frequency}Hz)`
						: `のこぎり波(${frequency}Hz)`}
					{playing ? "停止" : "再生"}
				</PlayingButton>
				<IconButton onClick={() => setOpen(!open)}>
					{open ? <ExpandLess /> : <ExpandMore />}
				</IconButton>
			</div>
			<AccordionDetails>
				<FlexColumn>
					<div>
						<p>音量</p>
					</div>
					<div>
						<VolumeDown />
						<GoodWidthSlider
							aria-labelledby="continuous-slider"
							max={100}
							min={0}
							onChange={(event, newValue) => {
								if (typeof newValue === "number") {
									setVolume(newValue);
								}
							}}
							value={volume}
							valueLabelDisplay="auto"
						/>
						<VolumeUp />
					</div>
					<div>
						<FormControl sx={{ m: 1 }} variant="standard">
							<InputLabel id="select-Wave-label">再生する音の種類</InputLabel>
							<Select
								id="select-Wave"
								label="Wave"
								labelId="select-Wave-label"
								onChange={(event) => {
									if (
										(Waves as Readonly<Array<string>>).includes(
											event.target.value
										)
									) {
										setWave(event.target.value as Wave);
									}
								}}
								value={wave}
							>
								<MenuItem value="Sine">
									<em>{`サイン波(${frequency}Hz)`}</em>
								</MenuItem>
								<MenuItem value="Square">
									<em>{`矩形波(${frequency}Hz)`}</em>
								</MenuItem>
								<MenuItem value="Triangle">
									<em>{`三角波(${frequency}Hz)`}</em>
								</MenuItem>
								<MenuItem value="Sawtooth">
									<em>{`のこぎり波(${frequency}Hz)`}</em>
								</MenuItem>
								<MenuItem value="WhiteNoise">
									<em>ホワイトノイズ</em>
								</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div>
						{wave !== "WhiteNoise" && (
							<>
								<TextField
									error={frequencyTextError}
									label="周波数"
									onChange={(element) => {
										setFrequencyText(element.currentTarget.value);
										const value = Number(element.currentTarget.value);
										if (Number.isNaN(value) || value <= 0) {
											setFrequencyTextError(true);
										} else {
											setFrequencyTextError(false);
											setFrequency(value);
											setFreqSlider(Math.sqrt(value));
										}
									}}
									required
									type="number"
									value={frequencyText}
								/>
								<p>
									<GoodWidthSlider
										aria-labelledby="continuous-slider"
										max={65}
										min={5}
										onChange={(event, newValue) => {
											if (typeof newValue === "number") {
												setFrequencyTextError(false);
												setFrequencyText(String(newValue ** 2));
												setFrequency(newValue ** 2);
												setFreqSlider(newValue);
											}
										}}
										step={1}
										value={freqSlider}
										valueLabelDisplay="auto"
										valueLabelFormat={(value) => value ** 2}
									/>
								</p>
							</>
						)}
					</div>
				</FlexColumn>
			</AccordionDetails>
		</Accordion>
	);
};

const MakeAudio: React.VFC = () => {
	const { audioContext } = React.useContext(AppContext);
	const makeAudioValue = useMakeAudioContext(audioContext);
	return (
		<MakeAudioContext.Provider value={makeAudioValue}>
			<MakeAudioPaper>
				<WhiteNoise />
			</MakeAudioPaper>
		</MakeAudioContext.Provider>
	);
};

export default MakeAudio;
