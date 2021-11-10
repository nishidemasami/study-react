import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface SpinLogoState {
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
		parseJSON: (state, action: PayloadAction<string>) => {
			JSON.parse(action.payload, (key, value) => {
				if (key === "logoColor" && typeof value === "string") {
					state.logoColor = value;
				} else if (key === "spin" && typeof value === "boolean") {
					state.spin = value;
				}
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = spinLogoSlice;

const spinLogoReducer = spinLogoSlice.reducer;
export default spinLogoReducer;
