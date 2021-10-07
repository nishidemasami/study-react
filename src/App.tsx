import { Toolbar } from "@material-ui/core";
import React from "react";
import { shallowEqual } from "react-redux";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import Menu from "./components/Menu";
import MenuItems from "./components/Menu/MenuItems";
import { useSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

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
	const { appState } = useSelector((state: RootState) => state, shallowEqual);
	return (
		<React.StrictMode>
			<AppBar />
			<AppDiv>
				<Toolbar />
				<MainContents>{MenuItems[appState.component].component}</MainContents>
			</AppDiv>
			<Menu />
		</React.StrictMode>
	);
};

export default App;
