import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { shallowEqual } from "react-redux";
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

/** まわるLogoのkeyframes */
const RollingLogoKeyframes = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

/** まわるLogo */
const RollingLogo = styled(Logo)<RollingLogoProps>`
	height: 40vmin;
	pointer-events: none;

	&[data-spinning="true"] {
		animation: ${RollingLogoKeyframes} infinite 1s linear;
	}

	fill: ${(props) => props.logoColor};
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
