import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const DivLikeA = styled.div`
	cursor: pointer;
	text-decoration: underline;
	display: inline-block;
`;

export const DividedDiv = styled.div`
	border-top: 1px solid black;
`;

export const CenteringDiv = styled.div`
	text-align: center;
	justify-content: center;
	display: flex;
`;

export const WordWrapP = styled.p`
	word-break: break-word;
`;

export const SitemapCard = styled(Card)`
	margin: 30px auto;
	text-align: left;
	width: fit-content;
`;

export const FlexColumn = styled.div`
	flex-direction: column;
	display: flex;
`;

export const FitContentCenteringFlexColumn = styled(FlexColumn)`
	width: fit-content;
	margin: 5px auto;
`;
