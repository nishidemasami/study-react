import React from "react";
import { shallowEqual } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { AppContext } from "../App/App";

/** Source変更時処理 */
export const useOnChangeSource = (gainNode: GainNode): void => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const { audioContext, source } = React.useContext(AppContext);

	React.useEffect(() => {
		console.log("useOnChangeSource");
		if (source) {
			source.loop = true;
			source.connect(gainNode).connect(audioContext.destination);
			if (whiteNoiseState.playing) {
				// 再生
				source.start();
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audioContext.destination, gainNode, source]);
};

/** クリック時処理※音声の再生はクリックと同時でないとブラウザが許可しないためここで処理 */
export const useOnChangeFrequency = (gainNode: GainNode): void => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);

	const { audioContext, setSource } = React.useContext(AppContext);

	React.useEffect(() => {
		console.log("useOnChangeFrequency");
		const channels = 1; // モノラル
		const { sampleRate } = audioContext; // サンプルレート(Hz)
		const frameCount = sampleRate * 4; // 4秒

		const myArrayBuffer: AudioBuffer = audioContext.createBuffer(
			channels,
			frameCount,
			sampleRate // サンプルレート(Hz)
		); // モノラル・4秒・44100Hzで705.6KB

		for (let channel = 0; channel < channels; channel += 1) {
			const nowBuffering: Float32Array = myArrayBuffer.getChannelData(channel);
			if (whiteNoiseState.wave === "WhiteNoise") {
				// ホワイトノイズ生成
				for (let i = 0; i < frameCount; i += 1) {
					nowBuffering[i] = Math.random() * 2 - 1;
				}
			} else if (whiteNoiseState.wave === "Sine") {
				// サイン波生成
				const buf = ((2 * whiteNoiseState.frequency) / sampleRate) * Math.PI; // 誤差許容・速度重視
				for (let i = 0; i < frameCount; i += 1) {
					nowBuffering[i] = Math.sin(buf * i);
				}
			} else if (whiteNoiseState.wave === "Square") {
				// 矩形波生成
				const wavelength = sampleRate / whiteNoiseState.frequency;
				const halfWavelength = wavelength / 2;
				for (let i = 0; i < frameCount; i += 1) {
					nowBuffering[i] = i % wavelength < halfWavelength ? 1 : 0;
				}
			}
		}
		gainNode.gain.value = whiteNoiseState.volume / 100;

		const bufferSource = audioContext.createBufferSource();
		bufferSource.buffer = myArrayBuffer;
		bufferSource.loop = true;
		setSource(bufferSource);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		audioContext,
		gainNode.gain,
		whiteNoiseState.frequency,
		whiteNoiseState.volume,
		whiteNoiseState.wave,
	]);
};

/** 再生時処理 */
export const useOnPaly = (gainNode: GainNode): void => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);

	const { source } = React.useContext(AppContext);

	React.useEffect(() => {
		console.log("useOnPaly");
		if (source) {
			if (whiteNoiseState.playing) {
				// 再生
				useOnChangeFrequency(gainNode);
			} else if (source && source.buffer != null) {
				// 停止
				source.stop();
				source.buffer = null; // メモリリーク防止
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [whiteNoiseState.playing]);
};
