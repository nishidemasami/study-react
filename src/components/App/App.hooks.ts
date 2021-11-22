import React from "react";

// webkit用Typescript型宣言
declare global {
	interface Window {
		webkitAudioContext: AudioContext;
	}
}

/** Appのコンテクスト */
export type AppContextProps = {
	/** オーディオコンテクスト */
	audioContext: AudioContext;
	/** オーディオソース */
	source?: AudioBufferSourceNode;
	/** オーディオソースの設定 */
	setSource: (source: AudioBufferSourceNode) => void;
};

export const useAppContext = (): AppContextProps => {
	const [audioContext] = React.useState<AudioContext>(
		new (window.AudioContext || window.webkitAudioContext)()
	);
	const [source, setSourceWork] = React.useState<AudioBufferSourceNode>();
	const setSource = (prmSource?: AudioBufferSourceNode) => {
		if (source) {
			source.stop();
			source.buffer = null; // メモリリーク防止
		}
		setSourceWork(prmSource);
	};

	return { audioContext, source, setSource };
};
