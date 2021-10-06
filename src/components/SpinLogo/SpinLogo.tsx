import { Button } from "@material-ui/core";
import React from "react";
import { shallowEqual } from "react-redux";
import styled from "styled-components";
import { useDispatch, useSelector } from "../../redux/hooks";
import { actions } from "../../redux/state/spinLogo";
import { RootState } from "../../redux/store";
import logo from "./logo.svg";

/** まわるdiv */
const RollingImage = styled.img`
	height: 40vmin;
	pointer-events: none;

	&[data-spinning="true"] {
		animation: App-logo-spin infinite 1s linear;
	}

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
			<RollingImage alt="logo" data-spinning={spinLogoState.spin} src={logo} />
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
		</>
	);
};

export default SpinLogo;
