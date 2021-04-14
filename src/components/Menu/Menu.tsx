import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Autorenew,
  Cancel,
  ExposurePlus1,
  Menu as MenuIcon,
} from "@material-ui/icons";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setComponent, setOpenMenu } from "../../redux/state/app";
import { RootState } from "../../redux/store";
import "./Menu.scss";

function Menu(): JSX.Element {
  const { appState } = useAppSelector(
    (state: RootState) => state,
    shallowEqual
  );
  const dispatch = useAppDispatch();

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
            {["Cancel"].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  dispatch(setOpenMenu(false));
                }}
              >
                <ListItemIcon>
                  <Cancel />
                </ListItemIcon>
                <ListItemText primary="閉じる" />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {(["count", "spinLogo"] as typeof appState.component[]).map(
              (text) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => {
                    dispatch(setComponent(text));
                    dispatch(setOpenMenu(false));
                  }}
                >
                  <ListItemIcon>
                    {text === "count" ? <ExposurePlus1 /> : <Autorenew />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Menu;
