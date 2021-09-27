import {
	TypedUseSelectorHook,
	useDispatch as dispatch,
	useSelector as selector,
} from "react-redux";
import { RootState, store } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDispatch = () => dispatch<typeof store.dispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selector;
