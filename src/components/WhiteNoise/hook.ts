import React from "react";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions } from "../../redux/state/whiteNoise";
import { RootState } from "../../redux/store";
import { AppContext } from "../App/App";

/** クリック時処理※音声の再生はクリックと同時でないとブラウザが許可しないためここで処理 */
export const useOnClickToStartAndStop = (gainNode: GainNode): (() => void) => {
	const { whiteNoiseState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const dispatch = useDispatch();

	const { audioContext, setSource, source } = React.useContext(AppContext);

	return React.useCallback(() => {
		// 停止
		if (source) {
			source.stop();
			source.buffer = null; // メモリリーク防止
		}
		if (!whiteNoiseState.playing) {
			// 再生
			const channels = 1; // モノラル
			const { sampleRate } = audioContext; // サンプルレート(Hz)
			const frameCount = sampleRate * 4; // 4秒

			const myArrayBuffer: AudioBuffer = audioContext.createBuffer(
				channels,
				frameCount,
				sampleRate // サンプルレート(Hz)
			); // モノラル・4秒・44100Hzで705.6KB

			for (let channel = 0; channel < channels; channel += 1) {
				const nowBuffering: Float32Array =
					myArrayBuffer.getChannelData(channel);
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
			setSource(bufferSource);
			bufferSource.buffer = myArrayBuffer;
			bufferSource.loop = true;
			bufferSource.connect(gainNode).connect(audioContext.destination);
			bufferSource.start();
		}
		dispatch(actions.setPlaying(!whiteNoiseState.playing));
	}, [
		source,
		whiteNoiseState.playing,
		whiteNoiseState.volume,
		whiteNoiseState.wave,
		whiteNoiseState.frequency,
		dispatch,
		audioContext,
		gainNode,
		setSource,
	]);
};
