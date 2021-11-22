/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch as dispatch, useSelector as selector } from "react-redux";
import { store } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => dispatch<typeof store.dispatch>();
export const useSelector = selector;
