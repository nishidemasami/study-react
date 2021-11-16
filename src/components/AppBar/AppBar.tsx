import { Home, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions, menuList } from "../../redux/state/app";
import { RootState } from "../../redux/store";
import MenuItems from "../Menu/MenuItems";

const AppBarComponent: React.VFC = () => {
	const { appState } = useSelector((state: RootState) => state, shallowEqual);
	const dispatch = useDispatch();
	return (
		<Box sx={{ flexGrow: 0 }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						aria-label="menu"
						color="inherit"
						edge="start"
						onClick={() => dispatch(actions.setOpenMenu(!appState.openMenu))}
						size="medium"
						sx={{ mr: 2 }}
					>
						<Menu />
					</IconButton>
					<Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
						{appState.component && MenuItems[appState.component].name}
					</Typography>
					<IconButton
						aria-label="menu"
						color="inherit"
						edge="start"
						onClick={() => dispatch(actions.setComponent(menuList[0]))}
						size="medium"
						sx={{ mr: 2 }}
					>
						<Home />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default AppBarComponent;
