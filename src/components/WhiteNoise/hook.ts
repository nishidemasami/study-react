import React from "react";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions, Wave } from "../../redux/state/whiteNoise";
import { RootState } from "../../redux/store";
import { AppContext } from "../App/App";

const CHANNELS = 1; // モノラル

const genAudio = (
	channels: number,
	sampleRate: number,
	frameCount: number,
	myArrayBuffer: AudioBuffer,
	wave: Wave,
	frequency: number
) => {
	for (let channel = 0; channel < channels; channel += 1) {
		const nowBuffering: Float32Array = myArrayBuffer.getChannelData(channel);
		if (wave === "WhiteNoise") {
			// ホワイトノイズ生成
			for (let i = 0; i < frameCount; i += 1) {
				nowBuffering[i] = Math.random() * 2 - 1;
			}
		} else if (wave === "Sine") {
			// サイン波生成
			const buf = ((2 * frequency) / sampleRate) * Math.PI; // 誤差許容・速度重視
			for (let i = 0; i < frameCount; i += 1) {
				nowBuffering[i] = Math.sin(buf * i);
			}
		} else if (wave === "Square") {
			// 矩形波生成
			const wavelength = sampleRate / frequency;
			const halfWavelength = wavelength / 2;
			for (let i = 0; i < frameCount; i += 1) {
				nowBuffering[i] = i % wavelength < halfWavelength ? 1 : -1;
			}
		} else if (wave === "Triangle") {
			// 三角波生成
			const wavelength = sampleRate / frequency;
			const halfWavelength = wavelength / 2;
			const quarterWavelength = wavelength / 4;
			for (let i = 0; i < frameCount; i += 1) {
				const pressure = i % halfWavelength;
				if (i % wavelength < halfWavelength) {
					if (pressure < quarterWavelength) {
						nowBuffering[i] = pressure / halfWavelength;
					} else {
						nowBuffering[i] = 1 - pressure / halfWavelength;
					}
				} else if (pressure < quarterWavelength) {
					nowBuffering[i] = -pressure / halfWavelength;
				} else {
					nowBuffering[i] = pressure / halfWavelength - 1;
				}
			}
		} else if (wave === "Sawtooth") {
			// のこぎり波生成
			const wavelength = sampleRate / frequency;
			for (let i = 0; i < frameCount; i += 1) {
				nowBuffering[i] = ((i % wavelength) / wavelength) * 2 - 1;
			}
		}
	}
};

const doPlay = (
	audioContext: AudioContext,
	setSource: (source?: AudioBufferSourceNode | undefined) => void,
	wave: Wave,
	frequency: number,
	gainNode: GainNode
) => {
	// 再生中

	/** 振動数 */
	const vibrationCount =
		frequency < 440 ? (frequency < 100 ? frequency : 1000) : 10000;
	/** サンプルレート(Hz) */
	const { sampleRate } = audioContext;
	/**
	 * フレーム数
	 * vibrationCount回振動するフレーム数。440Hzの場合22.727270833333332秒
	 */
	const frameCount = Math.floor((sampleRate * vibrationCount) / frequency);

	// 「Math.floor((sampleRate * vibrationCount) / frequency) / sampleRate」秒のバッファを作成
	const myArrayBuffer: AudioBuffer = audioContext.createBuffer(
		CHANNELS,
		frameCount,
		sampleRate
	); // （例）モノラル・4秒・44100Hzで705.6KB

	genAudio(CHANNELS, sampleRate, frameCount, myArrayBuffer, wave, frequency);

	const bufferSource = audioContext.createBufferSource();
	setSource(bufferSource);
	bufferSource.buffer = myArrayBuffer;
	bufferSource.loop = true;
	bufferSource.connect(gainNode).connect(audioContext.destination);
	bufferSource.start();
};

/** 音量変更時処理 */
export const useOnChangeVolume = (gainNode: GainNode): void => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);

	React.useEffect(() => {
		if (
			whiteNoiseState.wave === "Square" ||
			whiteNoiseState.wave === "WhiteNoise"
		) {
			gainNode.gain.value = (whiteNoiseState.volume ** 2 / 10000) * 0.5;
		} else if (whiteNoiseState.wave === "Triangle") {
			gainNode.gain.value = (whiteNoiseState.volume ** 2 / 10000) * 2;
		} else {
			gainNode.gain.value = whiteNoiseState.volume ** 2 / 10000;
		}
	}, [gainNode, whiteNoiseState.volume, whiteNoiseState.wave]);
};

/** 周波数・種類変更時処理※音声の再生はユーザ操作と同時でないとブラウザが許可しないためここで処理 */
export const useOnChangeFrequency = (gainNode: GainNode): void => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);

	const { audioContext, setSource } = React.useContext(AppContext);

	React.useEffect(() => {
		// 停止
		setSource();

		if (whiteNoiseState.playing) {
			// 再生中
			doPlay(
				audioContext,
				setSource,
				whiteNoiseState.wave,
				whiteNoiseState.frequency,
				gainNode
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audioContext, gainNode, whiteNoiseState.frequency, whiteNoiseState.wave]);
};

/** 再生ボタン押下時処理※音声の再生はユーザ操作と同時でないとブラウザが許可しないためここで処理 */
export const useOnClickToStartAndStop = (gainNode: GainNode): (() => void) => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const dispatch = useDispatch();

	const { audioContext, setSource } = React.useContext(AppContext);

	return React.useCallback(() => {
		// 停止
		setSource();

		if (!whiteNoiseState.playing) {
			// 再生
			doPlay(
				audioContext,
				setSource,
				whiteNoiseState.wave,
				whiteNoiseState.frequency,
				gainNode
			);
		}
		dispatch(actions.setPlaying(!whiteNoiseState.playing));
	}, [
		audioContext,
		dispatch,
		gainNode,
		setSource,
		whiteNoiseState.frequency,
		whiteNoiseState.playing,
		whiteNoiseState.wave,
	]);
};
