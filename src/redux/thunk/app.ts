import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions as appActions, menuList } from "../state/app";
import { actions as countActions } from "../state/count";
import { actions as spinLogoActions } from "../state/spinLogo";
import { localStorageKeyList, localStorageKeyPrefix } from "./localStorage";

/**
 * アプリケーションの初期化
 */
const init = createAsyncThunk<void, void>(
	"localStorage/loadLocalStorage",
	async (arg, thunk): Promise<void> => {
		thunk.dispatch(appActions.setComponent(menuList[0]));
		localStorageKeyList.forEach((localStorageKey) => {
			// ローカルストレージからStateを取得
			const savedStateData = localStorage.getItem(localStorageKey);

			if (!savedStateData) {
				return;
			}

			if (localStorageKey === `${localStorageKeyPrefix}appState`) {
				thunk.dispatch(appActions.parseJSON(savedStateData));
			} else if (localStorageKey === `${localStorageKeyPrefix}countState`) {
				thunk.dispatch(countActions.parseJSON(savedStateData));
			} else if (localStorageKey === `${localStorageKeyPrefix}spinLogoState`) {
				thunk.dispatch(spinLogoActions.parseJSON(savedStateData));
			}
		});
	}
);

export { init };
