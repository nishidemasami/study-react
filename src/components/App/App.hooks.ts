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
};

export const useAppContext = (): AppContextProps => {
	const [audioContext] = React.useState<AudioContext>(
		new (window.AudioContext || window.webkitAudioContext)()
	);

	return { audioContext };
};
