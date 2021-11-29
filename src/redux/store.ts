import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./state/app";
import bitcoinReducer from "./state/bitcoin";
import countReducer from "./state/count";
import cubeReducer from "./state/cube";
import spinLogoReducer from "./state/spinLogo";

export const store = configureStore({
	reducer: {
		appState: appReducer,
		bitcoinState: bitcoinReducer,
		countState: countReducer,
		cubeState: cubeReducer,
		spinLogoState: spinLogoReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
