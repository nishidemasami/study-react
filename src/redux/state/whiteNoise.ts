import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// webkit用Typescript型宣言
declare global {
	interface Window {
		webkitAudioContext: AudioContext;
	}
}

// Define a type for the slice state
export interface WhiteNoiseState {
	/** ボリューム */
	volume: number;
	/** 再生中かどうかフラグ */
	playing: boolean;
}

// Define the initial state using that type
const initialState: WhiteNoiseState = {
	volume: 25,
	playing: false,
};

const whiteNoiseSlice = createSlice({
	name: "whiteNoise",
	initialState,
	reducers: {
		setVolume: (state, action: PayloadAction<typeof state.volume>) => {
			state.volume = action.payload;
		},
		setPlaying: (state, action: PayloadAction<typeof state.playing>) => {
			state.playing = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = whiteNoiseSlice;

const whiteNoiseReducer = whiteNoiseSlice.reducer;
export default whiteNoiseReducer;
