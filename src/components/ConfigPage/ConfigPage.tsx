import styled from "@emotion/styled";
import {
	Button,
	Checkbox,
	Dialog,
	FormControlLabel,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { SketchPicker } from "react-color";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions as appActions } from "../../redux/state/app";
import { actions as countActions } from "../../redux/state/count";
import { actions as spinLogoActions } from "../../redux/state/spinLogo";
import { RootState } from "../../redux/store";
import {
	clearLocalStorage,
	loadLocalStorage,
	saveLocalStorage,
} from "../../redux/thunk/localStorage";
import { checkHTMLColor } from "../../utils/HTMLUtils";
import { DividedDiv } from "../Common/Styled";
import { useShowColorPicker } from "./hooks";

const GoodMarginTextField = styled(TextField)`
	margin: 8px;
`;

const NoMarginPaper = styled(Paper)`
	margin: 0;
	max-height: unset;
	max-width: unset;
`;

const ConfigPage: React.VFC = () => {
	const { countState, spinLogoState, appState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const dispatch = useDispatch();

	const { showColorPicker, setShowColorPicker } = useShowColorPicker();
	const {
		showColorPicker: showAppStateBackgroundColorPicker,
		setShowColorPicker: setShowAppStateBackgroundColorColorPicker,
	} = useShowColorPicker();

	return (
		<>
			<Typography>設定</Typography>
			<DividedDiv>
				<Typography>全体</Typography>
				<GoodMarginTextField
					error={!checkHTMLColor(appState.backgroundColor)}
					label="背景色"
					onChange={(element) =>
						dispatch(appActions.setBackgroundColor(element.currentTarget.value))
					}
					onClick={() => setShowAppStateBackgroundColorColorPicker(true)}
					required
					type="text"
					value={appState.backgroundColor}
				/>
				<Dialog
					PaperComponent={NoMarginPaper}
					onClose={() => {
						setShowAppStateBackgroundColorColorPicker(false);
					}}
					open={showAppStateBackgroundColorPicker}
				>
					<SketchPicker
						color={appState.backgroundColor}
						onChange={(color) =>
							dispatch(appActions.setBackgroundColor(color.hex))
						}
					/>
				</Dialog>
			</DividedDiv>
			<DividedDiv>
				<Typography>ロゴまわし</Typography>
				<GoodMarginTextField
					error={!checkHTMLColor(spinLogoState.logoColor)}
					label="ロゴの色"
					onChange={(element) =>
						dispatch(spinLogoActions.setLogoColor(element.currentTarget.value))
					}
					onClick={() => setShowColorPicker(true)}
					required
					type="text"
					value={spinLogoState.logoColor}
				/>
				<Dialog
					PaperComponent={NoMarginPaper}
					onClose={() => {
						setShowColorPicker(false);
					}}
					open={showColorPicker}
				>
					<SketchPicker
						color={spinLogoState.logoColor}
						onChange={(color) =>
							dispatch(spinLogoActions.setLogoColor(color.hex))
						}
					/>
				</Dialog>
				<br />
				<FormControlLabel
					control={
						<Checkbox
							checked={spinLogoState.spin}
							onChange={(element) =>
								dispatch(
									spinLogoActions.setSpinLogo(element.currentTarget.checked)
								)
							}
						/>
					}
					label="まわっているかどうかフラグ"
				/>
			</DividedDiv>
			<DividedDiv>
				<Typography>カウントアップ</Typography>
				<GoodMarginTextField
					label="カウント"
					onChange={(element) =>
						dispatch(countActions.setCount(Number(element.currentTarget.value)))
					}
					required
					type="number"
					value={countState.count}
				/>
				<br />
				<GoodMarginTextField
					label="パーセント"
					onChange={(element) =>
						dispatch(
							countActions.setShowingPercent(
								Number(element.currentTarget.value)
							)
						)
					}
					required
					type="number"
					value={countState.percent}
				/>
			</DividedDiv>
			<DividedDiv>
				<Typography>設定の保存と復元</Typography>
				<Button
					color="primary"
					onClick={() =>
						dispatch(saveLocalStorage({ appState, spinLogoState, countState }))
					}
					variant="contained"
				>
					設定の保存
				</Button>
				<br />
				<Button
					color="primary"
					onClick={() => dispatch(loadLocalStorage())}
					variant="contained"
				>
					設定のロード
				</Button>
				<br />
				<Button
					color="error"
					onClick={() => dispatch(clearLocalStorage())}
					variant="contained"
				>
					設定のクリア
				</Button>
			</DividedDiv>
		</>
	);
};

export default ConfigPage;
