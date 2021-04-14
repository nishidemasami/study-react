import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AppState {
  /** メニューを表示するかどうか */
  openMenu: boolean;
  /** 表示するコンポーネント */
  component: "count" | "spinLogo";
}

// Define the initial state using that type
const initialState: AppState = {
  openMenu: false,
  component: "count",
};
export const appSlice = createSlice({
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
export const { setComponent, setOpenMenu } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
