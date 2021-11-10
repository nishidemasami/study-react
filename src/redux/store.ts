import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./state/app";
import bitcoinReducer from "./state/bitcoin";
import countReducer from "./state/count";
import spinLogoReducer from "./state/spinLogo";

export const store = configureStore({
	reducer: {
		countState: countReducer,
		appState: appReducer,
		spinLogoState: spinLogoReducer,
		bitcoinState: bitcoinReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
