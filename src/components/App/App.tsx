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

/** アプリケーションのdiv */
const AppDiv = styled.div`
	text-align: center;
	p {
		margin: 2px;
	}
	a {
		color: #004457;
	}
`;

/** メインコンテンツ */
const MainContents = styled.div`
	position: absolute;
	width: 100%;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: black;
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

	return (
		<React.StrictMode>
			<AppBar />
			<AppDiv>
				<Toolbar />
				<MainContents>
					{appState.component && MenuItems[appState.component].component}
				</MainContents>
			</AppDiv>
			<Menu />
		</React.StrictMode>
	);
};

export default App;
