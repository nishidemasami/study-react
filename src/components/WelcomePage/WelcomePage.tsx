import { Typography } from "@mui/material";
import styled from "styled-components";
import { useDispatch } from "../../redux/hooks";
import { actions } from "../../redux/state/app";

const DivLikeA = styled.div`
	cursor: pointer;
	text-decoration: underline;
`;

const DividedDiv = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

const WelcomePage: React.VFC = () => {
	const dispatch = useDispatch();
	return (
		<>
			<DividedDiv>
				<Typography>このページはReact練習用ページです。</Typography>
				<Typography>
					左上のメニューボタン、もしくは以下の一覧から各機能を利用できます。
				</Typography>
			</DividedDiv>
			<DividedDiv>
				<Typography>機能一覧</Typography>
				<DivLikeA
					onClick={() => dispatch(actions.setComponent("count"))}
					onKeyPress={() => dispatch(actions.setComponent("count"))}
					role="button"
					tabIndex={0}
				>
					<Typography>カウント</Typography>
				</DivLikeA>
				<DivLikeA
					onClick={() => dispatch(actions.setComponent("spinLogo"))}
					onKeyPress={() => dispatch(actions.setComponent("spinLogo"))}
					role="button"
					tabIndex={0}
				>
					<Typography>ロゴまわし</Typography>
				</DivLikeA>
				<DivLikeA
					onClick={() => dispatch(actions.setComponent("helpPage"))}
					onKeyPress={() => dispatch(actions.setComponent("helpPage"))}
					role="button"
					tabIndex={0}
				>
					<Typography>ヘルプ</Typography>
				</DivLikeA>
			</DividedDiv>
			<DividedDiv>
				<Typography>
					詳しくは「
					<a href="https://github.com/nishidemasami/study-react">
						https://github.com/nishidemasami/study-react
					</a>
					」を参照して下さい。
				</Typography>
			</DividedDiv>
		</>
	);
};

export default WelcomePage;
