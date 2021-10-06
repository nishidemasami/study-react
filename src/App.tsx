import React from "react";
import { shallowEqual } from "react-redux";
import styled from "styled-components";
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

/** メインのheader */
const MainHeader = styled.header`
	background-color: #e6eeff;
	position: absolute;
	width: 100vw;
	height: 100vh;
	height: -webkit-fill-available;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: black;
`;

const App: React.VFC = () => {
	const { appState } = useSelector((state: RootState) => state, shallowEqual);
	return (
		<>
			<React.StrictMode>
				<AppDiv>
					<MainHeader>
						<a href="https://github.com/nishidemasami/study-react">
							<p>Welcome to https://github.com/nishidemasami/study-react</p>
						</a>
						{MenuItems[appState.component].component}
					</MainHeader>
				</AppDiv>
			</React.StrictMode>
			<Menu />
		</>
	);
};

export default App;
