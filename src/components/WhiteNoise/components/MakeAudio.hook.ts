import React from "react";
import { AppContext } from "../../App/App";
import { MakeAudioContext } from "./MakeAudio";

export const Waves = [
	"WhiteNoise",
	"Sine",
	"Square",
	"Triangle",
	"Sawtooth",
] as const;
export type Wave = typeof Waves[number];

/** MakeAudioのコンテクスト */
export type MakeAudioContextProps = {
	/** GainNode */
	gainNode?: GainNode;
	/** オーディオソース */
	source?: AudioBufferSourceNode;
	/** オーディオソースの設定 */
	setSource: (source?: AudioBufferSourceNode) => void;
	/** ボリューム */
	volume: number;
	/** ボリュームの設定 */
	setVolume: (volume: number) => void;
	/** 再生中かどうかフラグ */
	playing: boolean;
	/** 再生中かどうかフラグの設定 */
	setPlaying: (playing: boolean) => void;
	/** 再生する音の種類 */
	wave: Wave;
	/** 再生する音の種類の設定 */
	setWave: (wave: Wave) => void;
	/** 周波数 */
	frequency: number;
	/** 周波数の設定 */
	setFrequency: (frequency: number) => void;
};

/** MakeAudioのデフォルトコンテクスト */
export type MakeAudioContextDefaultProps = Partial<{
	/** ボリューム */
	volume: number;
	/** 再生する音の種類 */
	wave: Wave;
	/** 周波数 */
	frequency: number;
}>;

export const useMakeAudioContext = (
	audioContext: AudioContext,
	defaultValue: MakeAudioContextDefaultProps = {
		wave: "Sine",
		volume: 50,
		frequency: 440,
	}
): MakeAudioContextProps => {
	const [volume, setVolume] = React.useState<number>(defaultValue.volume ?? 50);
	const [playing, setPlaying] = React.useState<boolean>(false);
	const [wave, setWave] = React.useState<Wave>(defaultValue.wave ?? "Sine");
	const [frequency, setFrequency] = React.useState<number>(
		defaultValue.frequency ?? 440
	);
	const [gainNode] = React.useState<GainNode>(audioContext.createGain());
	const [source, setSourceWork] = React.useState<AudioBufferSourceNode>();
	const setSource = React.useCallback(
		(prmSource?: AudioBufferSourceNode) => {
			if (source) {
				source.stop();
				source.buffer = null; // メモリリーク防止
			}
			setSourceWork(prmSource);
		},
		[source]
	);

	return {
		volume,
		setVolume,
		playing,
		setPlaying,
		wave,
		setWave,
		frequency,
		setFrequency,
		gainNode,
		source,
		setSource,
	};
};

const CHANNELS = 1; // モノラル

/**
 * 波形の生成
 *
 * ※本当はaudioContext.createOscillatorでサイン波でも矩形波でも生成できるけど勉強のために手で生成
 *
 * @param channels チャンネル数（1ならモノラル、2ならステレオ）
 * @param sampleRate サンプリングレート
 * @param frameCount フレーム数
 * @param myArrayBuffer オーディオバッファ
 * @param wave 波形の種類
 * @param frequency 周波数
 */
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setOscillator = (
	audioContext: AudioContext,
	wave: "sawtooth" | "sine" | "square" | "triangle",
	frequency: number,
	gainNode: GainNode
) => {
	// create Oscillator node
	const oscillator = audioContext.createOscillator();

	oscillator.type = wave;
	oscillator.frequency.value = frequency; // value in hertz
	oscillator.connect(audioContext.destination);
	oscillator.connect(gainNode).connect(audioContext.destination);
	oscillator.start();
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
	const { wave, volume } = React.useContext(MakeAudioContext);

	React.useEffect(() => {
		if (wave === "Square" || wave === "WhiteNoise") {
			gainNode.gain.value = (volume ** 2 / 10000) * 0.5;
		} else if (wave === "Triangle") {
			gainNode.gain.value = (volume ** 2 / 10000) * 2;
		} else {
			gainNode.gain.value = volume ** 2 / 10000;
		}
	}, [gainNode, volume, wave]);
};

/** 周波数・種類変更時処理 */
export const useOnChangeFrequency = (gainNode: GainNode): void => {
	const { audioContext } = React.useContext(AppContext);

	const { setSource, playing, wave, frequency } =
		React.useContext(MakeAudioContext);

	React.useEffect(() => {
		// 停止
		setSource();

		if (playing) {
			// 再生中
			doPlay(audioContext, setSource, wave, frequency, gainNode);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audioContext, gainNode, frequency, wave]);
};

/** 再生ボタン押下時処理※音声の再生はユーザ操作と同時でないとブラウザが許可しないためここで処理 */
export const useOnClickToStartAndStop = (gainNode: GainNode): (() => void) => {
	const { audioContext } = React.useContext(AppContext);

	const { setSource, setPlaying, playing, wave, frequency } =
		React.useContext(MakeAudioContext);

	return React.useCallback(() => {
		// 停止
		setSource();

		if (!playing) {
			// 再生
			doPlay(audioContext, setSource, wave, frequency, gainNode);
		}
		setPlaying(!playing);
	}, [audioContext, frequency, gainNode, playing, setPlaying, setSource, wave]);
};
