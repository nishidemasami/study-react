import { Autorenew, Help, Home, PlusOne } from "@mui/icons-material";
import { menuComponents } from "../../redux/state/app";
import Count from "../Count";
import HelpPage from "../HelpPage";
import SpinLogo from "../SpinLogo";
import WelcomePage from "../WelcomePage";

/**
 * メニューアイテム一覧
 */
const MenuItems: {
	[menu in menuComponents]: {
		component: JSX.Element;
		name: string;
		icon: JSX.Element;
	};
} = {
	count: {
		component: <Count />,
		name: "カウントアップ",
		icon: <PlusOne />,
	},
	spinLogo: {
		component: <SpinLogo />,
		name: "ロゴまわし",
		icon: <Autorenew />,
	},
	helpPage: {
		component: <HelpPage />,
		name: "ヘルプ",
		icon: <Help />,
	},
	welcomePage: {
		component: <WelcomePage />,
		name: "ようこそ",
		icon: <Home />,
	},
};

export default MenuItems;
