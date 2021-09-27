import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SpinLogoState {
	/** ロゴ回転フラグ */
	spin: boolean;
}

// Define the initial state using that type
const initialState: SpinLogoState = {
	spin: false,
};
const spinLogoSlice = createSlice({
	name: "spinLogo",
	initialState,
	reducers: {
		setSpinLogo: (state, action: PayloadAction<typeof state.spin>) => {
			state.spin = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSpinLogo } = spinLogoSlice.actions;

const spinLogoReducer = spinLogoSlice.reducer;
export default spinLogoReducer;
