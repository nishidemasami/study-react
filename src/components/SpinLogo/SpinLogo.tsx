import { Button } from "@material-ui/core";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../../redux/hooks";
import { setSpinLogo } from "../../redux/state/spinLogo";
import { RootState } from "../../redux/store";
import logo from "./logo.svg";
import "./SpinLogo.scss";

function SpinLogo(): JSX.Element {
	const { spinLogoState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const dispatch = useDispatch();

	return (
		<>
			<img
				alt="logo"
				className={spinLogoState.spin ? "SpinLogo-logo-spin" : "SpinLogo-logo"}
				src={logo}
			/>
			<p>
				<Button
					color="primary"
					onClick={() => {
						dispatch(setSpinLogo(!spinLogoState.spin));
					}}
					variant="contained"
				>
					{spinLogoState.spin ? "止める" : "まわす"}
				</Button>
			</p>
		</>
	);
}

export default SpinLogo;
