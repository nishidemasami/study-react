import { Autorenew, ExposurePlus1, Help } from "@material-ui/icons";
import { menuComponents } from "../../redux/state/app";
import Count from "../Count";
import HelpPage from "../HelpPage";
import SpinLogo from "../SpinLogo";

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
		icon: <ExposurePlus1 />,
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
};

export default MenuItems;
