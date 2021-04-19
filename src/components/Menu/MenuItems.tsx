import { Autorenew, ExposurePlus1 } from "@material-ui/icons";
import { menuComponents } from "../../redux/state/app";
import Count from "../Count";
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
};

export default MenuItems;
