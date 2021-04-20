import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Cancel, Menu as MenuIcon } from "@material-ui/icons";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { menuList, setComponent, setOpenMenu } from "../../redux/state/app";
import { RootState } from "../../redux/store";
import "./Menu.scss";
import MenuItems from "./MenuItems";

function Menu(): JSX.Element {
  const { appState } = useSelector((state: RootState) => state, shallowEqual);
  const dispatch = useDispatch();

  return (
    <>
      <div className="Menu">
        <IconButton onClick={() => dispatch(setOpenMenu(!appState.openMenu))}>
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        anchor="left"
        onClose={() => dispatch(setOpenMenu(false))}
        open={appState.openMenu}
      >
        <div onKeyDown={() => dispatch(setOpenMenu(false))} role="presentation">
          <List>
            <ListItem
              button
              onClick={() => {
                dispatch(setOpenMenu(false));
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
                  dispatch(setComponent(menu));
                  dispatch(setOpenMenu(false));
                }}
              >
                <ListItemIcon>{MenuItems[menu].icon}</ListItemIcon>
                <ListItemText primary={MenuItems[menu].name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Menu;
