import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";
import React from "react";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { init } from "../../redux/thunk/app";
import { saveLocalStorage } from "../../redux/thunk/localStorage";
import AppBar from "../AppBar";
import Menu from "../Menu";
import MenuItems from "../Menu/MenuItems";
import { AppContextProps, useAppContext } from "./App.hooks";

export const AppContext = React.createContext({} as AppContextProps);

/** アプリケーションのdiv */
const AppDiv = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	p {
		margin: 2px;
	}
	a {
		color: #004457;
	}
`;

/** メインコンテンツのプロパティ */
type MainContentsProps = {
	/** メインコンテンツの背景色 */
	backgroundColor: string;
};

/** メインコンテンツ */
const MainContents = styled.div<MainContentsProps>`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: black;
	background-color: ${(props) => props.backgroundColor};
	flex-grow: 1;
`;

/** Toolbar */
const MinToolbar = styled(Toolbar)`
	flex-grow: 0;
	padding: 0;
	margin: 0;
`;

const App: React.VFC = () => {
	const { appState, countState, spinLogoState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(init());
	}, [dispatch]);

	React.useEffect(() => {
		dispatch(saveLocalStorage({ appState, countState, spinLogoState }));
	}, [dispatch, appState, countState, spinLogoState]);

	const appContext = useAppContext();

	return (
		<React.StrictMode>
			<AppContext.Provider value={appContext}>
				<AppBar />
				<AppDiv>
					<MinToolbar />
					<MainContents backgroundColor={appState.backgroundColor}>
						{appState.component && MenuItems[appState.component].component}
					</MainContents>
				</AppDiv>
				<Menu />
			</AppContext.Provider>
		</React.StrictMode>
	);
};

export default App;
