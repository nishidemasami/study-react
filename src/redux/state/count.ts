import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchLastCounter from "../thunk/fetchCounter";

// Define a type for the slice state
export interface CounterState {
	/** 表示するメッセージ */
	message: string;
	/** プログレスフラグ */
	progress: boolean;
	/** カウント値 */
	count: number;
	/** 確率 */
	percent: number;
}

// Define the initial state using that type
const initialState: CounterState = {
	message: "",
	progress: false,
	count: 0,
	percent: 50,
};
const countSlice = createSlice({
	name: "count",
	initialState,
	reducers: {
		/** 確率を設定する */
		setShowingPercent: (state, action: PayloadAction<number>) => {
			state.percent = action.payload;
		},
		setProgress: (state, action: PayloadAction<boolean>) => {
			state.progress = action.payload;
		},
		setMessasge: (state, action: PayloadAction<string>) => {
			state.message = action.payload;
		},
		setCount: (state, action: PayloadAction<typeof state.count>) => {
			state.count = action.payload;
		},
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
		parseJSON: (state, action: PayloadAction<string>) => {
			JSON.parse(action.payload, (key, value) => {
				if (key === "count" && typeof value === "number") {
					state.count = value;
				} else if (key === "percent" && typeof value === "number") {
					state.percent = value;
				}
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchLastCounter.pending, (state, action) => ({
			...state,
			message: `判定中です。${action.meta.arg.second}秒後に${action.meta.arg.percent}%の確率で${action.meta.arg.value}増えます。`,
		}));
		builder.addCase(fetchLastCounter.fulfilled, (state, action) => ({
			...state,
			count: state.count + action.payload.count,
			message: `判定に成功しました。${action.payload.count}増えました。`,
		}));
		builder.addCase(fetchLastCounter.rejected, (state) => ({
			...state,
			message: "判定に失敗しました。1減りました。",
			count: state.count - 1,
		}));
	},
});

// Action creators are generated for each case reducer function
export const { actions } = countSlice;

const countReducer = countSlice.reducer;
export default countReducer;
