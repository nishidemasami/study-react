import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** メニューリスト */
export const menuList = [
	"welcomePage",
	"count",
	"spinLogo",
	"helpPage",
] as const;

/** メニュー一覧タイプ */
export type menuComponents = typeof menuList[number];

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
	component: menuList[0],
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
