import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** メニューリスト */
export const menuList = [
	"welcomePage",
	"count",
	"spinLogo",
	"whiteNoise",
	"bitcoin",
	"configPage",
	"siteMap",
	"helpPage",
	"version",
] as const;

/** メニュー一覧タイプ */
export type menuComponents = typeof menuList[number];

// Define a type for the slice state
export interface AppState {
	/** メニューを表示するかどうか */
	openMenu: boolean;
	/** 表示するコンポーネント */
	component?: menuComponents;
	/** メインコンテンツの背景色 */
	backgroundColor: string;
}

// Define the initial state using that type
const initialState: AppState = {
	openMenu: false,
	component: undefined,
	backgroundColor: "#e6eeff",
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
		setBackgroundColor: (
			state,
			action: PayloadAction<typeof state.backgroundColor>
		) => {
			state.backgroundColor = action.payload;
		},
		parseJSON: (state, action: PayloadAction<string>) => {
			[state.component] = menuList;
			JSON.parse(action.payload, (key, value) => {
				if (key === "openMenu" && typeof value === "boolean") {
					state.openMenu = value;
				} else if (
					key === "component" &&
					menuList.find((menu) => menu === value)
				) {
					state.component = value;
				}
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = appSlice;

const appReducer = appSlice.reducer;
export default appReducer;
