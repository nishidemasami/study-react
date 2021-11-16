import styled from "@emotion/styled";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Button, Slider } from "@mui/material";
import React from "react";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions } from "../../redux/state/whiteNoise";
import { RootState } from "../../redux/store";

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

	const [audioContext, setAudioContext] = React.useState<AudioContext>();
	const [gainNode, setGainNode] = React.useState<GainNode>();
	const [source, setSource] = React.useState<AudioBufferSourceNode>();

	React.useEffect(() => {
		const newAudioContext = new (window.AudioContext ||
			window.webkitAudioContext)();
		setAudioContext(newAudioContext);
		const newGainNode = newAudioContext.createGain();
		setGainNode(newGainNode);

		return () => {
			dispatch(actions.setPlaying(false));
			if (source) {
				source.stop();
				source.buffer = null;
			}
			if (newAudioContext) {
				newAudioContext.close();
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClickToStartAndStop = React.useCallback(() => {
		if (audioContext && gainNode) {
			if (whiteNoiseState.playing) {
				// 停止
				if (source) {
					source.stop();
					source.buffer = null; // メモリリーク防止
				}
			} else {
				// 再生
				const channels = 1; // モノラル
				const frameCount = audioContext.sampleRate * 2.0; // 2秒

				const myArrayBuffer = audioContext.createBuffer(
					channels,
					frameCount,
					audioContext.sampleRate
				);

				for (let channel = 0; channel < channels; channel += 1) {
					// ホワイトノイズ生成
					const nowBuffering = myArrayBuffer.getChannelData(channel);
					for (let i = 0; i < frameCount; i += 1) {
						nowBuffering[i] = Math.random() * 2 - 1;
					}
				}
				gainNode.gain.value = whiteNoiseState.volume / 100;

				const bufferSource = audioContext.createBufferSource();
				setSource(bufferSource);
				bufferSource.buffer = myArrayBuffer;
				bufferSource.loop = true;
				bufferSource.connect(gainNode).connect(audioContext.destination);
				bufferSource.start();
			}
			dispatch(actions.setPlaying(!whiteNoiseState.playing));
		}
	}, [
		audioContext,
		gainNode,
		whiteNoiseState.playing,
		whiteNoiseState.volume,
		dispatch,
		source,
	]);

	return (
		<>
			<p>
				<Button
					color={whiteNoiseState.playing ? "warning" : "primary"}
					onClick={onClickToStartAndStop}
					variant="contained"
				>
					ホワイトノイズ{whiteNoiseState.playing ? "停止" : "再生"}
				</Button>
			</p>
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
		</>
	);
};

export default WhiteNoise;
