import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SpinLogoState {
	/** ロゴ回転フラグ */
	spin: boolean;
	/** ロゴの色 */
	logoColor: string;
}

// Define the initial state using that type
const initialState: SpinLogoState = {
	spin: false,
	logoColor: "#61DAFB",
};
const spinLogoSlice = createSlice({
	name: "spinLogo",
	initialState,
	reducers: {
		setSpinLogo: (state, action: PayloadAction<typeof state.spin>) => {
			state.spin = action.payload;
		},
		setLogoColor: (state, action: PayloadAction<typeof state.logoColor>) => {
			state.logoColor = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = spinLogoSlice;

const spinLogoReducer = spinLogoSlice.reducer;
export default spinLogoReducer;
