import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../state/app";
import { actions as countActions, CounterState } from "../state/count";
import { actions as spinLogoActions, SpinLogoState } from "../state/spinLogo";

type saveLocalStorageArgType = {
	appState?: AppState;
	countState?: CounterState;
	spinLogoState?: SpinLogoState;
};

const localStorageKeyPrefix = "study-react/";
const localStorageKeyList = [
	`${localStorageKeyPrefix}appState`,
	`${localStorageKeyPrefix}countState`,
	`${localStorageKeyPrefix}spinLogoState`,
];

/**
 * ローカルストレージから設定をロード
 */
const loadLocalStorage = createAsyncThunk<void, void>(
	"localStorage/loadLocalStorage",
	async (arg, thunk): Promise<void> => {
		[
			`${localStorageKeyPrefix}countState`,
			`${localStorageKeyPrefix}spinLogoState`,
		].forEach((localStorageKey) => {
			// ローカルストレージからStateを取得
			const savedStateData = localStorage.getItem(localStorageKey);
			if (savedStateData === null) {
				return;
			}
			if (localStorageKey === `${localStorageKeyPrefix}countState`) {
				thunk.dispatch(countActions.parseJSON(savedStateData));
			} else if (localStorageKey === `${localStorageKeyPrefix}spinLogoState`) {
				thunk.dispatch(spinLogoActions.parseJSON(savedStateData));
			}
		});
	}
);

/**
 * ローカルストレージにStateを保存
 */
const saveLocalStorage = createAsyncThunk<void, saveLocalStorageArgType>(
	"localStorage/loadLocalStorage",
	async (arg): Promise<void> => {
		// ローカルストレージにStateを保存
		if (arg.appState) {
			localStorage.setItem(
				`${localStorageKeyPrefix}appState`,
				JSON.stringify(arg.appState)
			);
		}
		if (arg.countState) {
			localStorage.setItem(
				`${localStorageKeyPrefix}countState`,
				JSON.stringify(arg.countState)
			);
		}
		if (arg.spinLogoState) {
			localStorage.setItem(
				`${localStorageKeyPrefix}spinLogoState`,
				JSON.stringify(arg.spinLogoState)
			);
		}
	}
);

/**
 * ローカルストレージをクリア
 */
const clearLocalStorage = createAsyncThunk<void, void>(
	"localStorage/loadLocalStorage",
	async (): Promise<void> => {
		// ローカルストレージをクリア
		localStorageKeyList.forEach((localStorageKey) =>
			localStorage.removeItem(localStorageKey)
		);
	}
);

export {
	loadLocalStorage,
	saveLocalStorage,
	clearLocalStorage,
	localStorageKeyPrefix,
	localStorageKeyList,
};
