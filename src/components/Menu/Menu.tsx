import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions, menuList } from "../../redux/state/app";
import { RootState } from "../../redux/store";
import MenuItems from "./MenuItems";

const Menu: React.VFC = () => {
	const { appState } = useSelector((state: RootState) => state, shallowEqual);
	const dispatch = useDispatch();

	return (
		<Drawer
			anchor="left"
			onClose={() => dispatch(actions.setOpenMenu(false))}
			open={appState.openMenu}
		>
			<div
				onKeyDown={() => dispatch(actions.setOpenMenu(false))}
				role="presentation"
			>
				<List>
					<ListItem
						button
						onClick={() => {
							dispatch(actions.setOpenMenu(false));
						}}
					>
						<ListItemIcon>
							<Cancel />
						</ListItemIcon>
						<ListItemText primary="閉じる" />
					</ListItem>
				</List>
				<Divider />
				<List>
					{menuList.map((menu) => (
						<ListItem
							button
							key={menu}
							onClick={() => {
								dispatch(actions.setComponent(menu));
								dispatch(actions.setOpenMenu(false));
							}}
						>
							<ListItemIcon>{MenuItems[menu].icon}</ListItemIcon>
							<ListItemText primary={MenuItems[menu].name} />
						</ListItem>
					))}
				</List>
			</div>
		</Drawer>
	);
};

export default Menu;
