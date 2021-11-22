import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const Waves = ["WhiteNoise", "Sine", "Square"] as const;
export type Wave = typeof Waves[number];

// Define a type for the slice state
export interface WhiteNoiseState {
	/** ボリューム */
	volume: number;
	/** 再生中かどうかフラグ */
	playing: boolean;
	/** 再生する音の種類 */
	wave: Wave;
	/** 周波数 */
	frequency: number;
}

// Define the initial state using that type
const initialState: WhiteNoiseState = {
	volume: 20,
	playing: false,
	wave: "Sine",
	frequency: 440,
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
		setWave: (state, action: PayloadAction<typeof state.wave>) => {
			state.wave = action.payload;
		},
		setFrequency: (state, action: PayloadAction<typeof state.frequency>) => {
			state.frequency = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = whiteNoiseSlice;

const whiteNoiseReducer = whiteNoiseSlice.reducer;
export default whiteNoiseReducer;
