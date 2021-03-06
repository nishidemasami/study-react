import {
	Audiotrack,
	Autorenew,
	Help,
	Home,
	Info,
	Map,
	PlusOne,
	Settings,
	Toll,
} from "@mui/icons-material";
import { menuComponents } from "../../redux/state/app";
import Bitcoin from "../Bitcoin";
import ConfigPage from "../ConfigPage";
import Count from "../Count";
import HelpPage from "../HelpPage";
import SiteMap from "../SiteMap";
import SpinLogo from "../SpinLogo";
import Version from "../Version";
import WelcomePage from "../WelcomePage";
import WhiteNoise from "../WhiteNoise";

/**
 * メニューアイテム一覧
 */
const MenuItems: {
	[menu in menuComponents]: {
		component: JSX.Element;
		name: string;
		icon: JSX.Element;
		description: React.ReactNode;
	};
} = {
	count: {
		component: <Count />,
		name: "カウントアップ",
		icon: <PlusOne />,
		description: "数を数えるページです。",
	},
	spinLogo: {
		component: <SpinLogo />,
		name: "ロゴまわし",
		icon: <Autorenew />,
		description: "Reactのロゴをまわすページです。",
	},
	whiteNoise: {
		component: <WhiteNoise />,
		name: "音の再生",
		icon: <Audiotrack />,
		description: "サイン波やホワイトノイズなどを再生します。",
	},
	helpPage: {
		component: <HelpPage />,
		name: "ヘルプ",
		icon: <Help />,
		description: "ヘルプページです。",
	},
	welcomePage: {
		component: <WelcomePage />,
		name: "ようこそ",
		icon: <Home />,
		description: (
			<>
				最初に表示されるページです。
				<br />
				デフォルトの初期ページです。
			</>
		),
	},
	configPage: {
		component: <ConfigPage />,
		name: "設定",
		icon: <Settings />,
		description: "Stateの値を直接変更するページです。",
	},
	siteMap: {
		component: <SiteMap />,
		name: "サイトマップ",
		icon: <Map />,
		description: "サイトマップです。",
	},
	bitcoin: {
		component: <Bitcoin />,
		name: "ビットコイン",
		icon: <Toll />,
		description: (
			<>
				ビットコインアドレスを
				<br />
				生成するページです。
			</>
		),
	},
	version: {
		component: <Version />,
		name: "バージョン情報",
		icon: <Info />,
		description: "バージョン情報です。",
	},
};

export default MenuItems;
