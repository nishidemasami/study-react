import { Button } from "@mui/material";
import React from "react";
import { shallowEqual } from "react-redux";
import styled from "styled-components";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions } from "../../redux/state/spinLogo";
import { RootState } from "../../redux/store";
import { getRandomColor } from "../../utils/HTMLUtils";
import { ReactComponent as Logo } from "./logo.svg";

/** まわるLogoのプロパティ */
type RollingLogoProps = {
	/** まわるLogoの色 */
	logoColor: string;
};

/** まわるLogo */
const RollingLogo = styled(Logo)<RollingLogoProps>`
	height: 40vmin;
	pointer-events: none;

	&[data-spinning="true"] {
		animation: App-logo-spin infinite 1s linear;
	}

	fill: ${(props) => props.logoColor};

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const SpinLogo: React.VFC = () => {
	const { spinLogoState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);
	const dispatch = useDispatch();

	return (
		<>
			<p>
				<RollingLogo
					data-spinning={spinLogoState.spin}
					logoColor={spinLogoState.logoColor}
				/>
			</p>
			<p>
				<Button
					color="primary"
					onClick={() => {
						dispatch(actions.setSpinLogo(!spinLogoState.spin));
					}}
					variant="contained"
				>
					{spinLogoState.spin ? "止める" : "まわす"}
				</Button>
			</p>
			<p>
				<Button
					color="primary"
					onClick={() => {
						dispatch(actions.setLogoColor(getRandomColor()));
					}}
					variant="contained"
				>
					色をランダムに変える
				</Button>
			</p>
		</>
	);
};

export default SpinLogo;
