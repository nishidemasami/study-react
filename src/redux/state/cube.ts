import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { detectOSSimply } from "../../utils/BrowserUtils";

// Define a type for the slice state
export interface CubeState {
	/** 絶対値 */
	absolute: number;
	/** アルファ値 */
	alpha: number;
	/** ベータ値 */
	beta: number;
	/** ガンマ値 */
	gamma: number;
	/** 方角 */
	degrees: number;
	/** デバイスの向きを取得することを許可されているかどうかフラグ */
	deviceOrientationPermitted: boolean;
}

// Define the initial state using that type
const initialState: CubeState = {
	absolute: 0,
	alpha: 0,
	beta: 0,
	gamma: 0,
	degrees: 0,
	deviceOrientationPermitted: detectOSSimply() !== "iphone",
};

const cubeSlice = createSlice({
	name: "count",
	initialState,
	reducers: {
		setAbsolute: (state, action: PayloadAction<typeof state.absolute>) => {
			state.absolute = action.payload;
		},
		setAlpha: (state, action: PayloadAction<typeof state.alpha>) => {
			state.alpha = action.payload;
		},
		setBeta: (state, action: PayloadAction<typeof state.beta>) => {
			state.beta = action.payload;
		},
		setGamma: (state, action: PayloadAction<typeof state.gamma>) => {
			state.gamma = action.payload;
		},
		setDegrees: (state, action: PayloadAction<typeof state.degrees>) => {
			state.degrees = action.payload;
		},
		setDeviceOrientationPermitted: (
			state,
			action: PayloadAction<typeof state.deviceOrientationPermitted>
		) => {
			state.deviceOrientationPermitted = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = cubeSlice;

const cubeReducer = cubeSlice.reducer;
export default cubeReducer;
