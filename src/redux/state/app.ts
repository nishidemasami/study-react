import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** メニュー一覧タイプ */
export type menuComponents = "count" | "spinLogo";

/** メニューリスト */
export const menuList: menuComponents[] = ["count", "spinLogo"];

// Define a type for the slice state
interface AppState {
	/** メニューを表示するかどうか */
	openMenu: boolean;
	/** 表示するコンポーネント */
	component: menuComponents;
}

// Define the initial state using that type
const initialState: AppState = {
	openMenu: false,
	component: "count",
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setOpenMenu: (state, action: PayloadAction<typeof state.openMenu>) => {
			state.openMenu = action.payload;
		},
		setComponent: (state, action: PayloadAction<typeof state.component>) => {
			state.component = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = appSlice;

const appReducer = appSlice.reducer;
export default appReducer;
