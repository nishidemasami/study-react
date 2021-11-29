import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { getTimeNow } from "../../utils/TimeUtils";
import { FitContentCenteringFlexColumn } from "../Common/Styled";
import MakeAudio from "./components/MakeAudio";

const WhiteNoise: React.VFC = () => {
	const [result, setResult] = React.useState<Array<JSX.Element>>([]);

	React.useEffect(() => {
		setResult([<MakeAudio key={getTimeNow()} />]);
	}, []);

	return (
		<>
			<FitContentCenteringFlexColumn>{result}</FitContentCenteringFlexColumn>
			<p>
				<IconButton
					color="inherit"
					edge="start"
					onClick={() =>
						setResult([...result, <MakeAudio key={getTimeNow()} />])
					}
					size="medium"
					sx={{ mr: 2 }}
				>
					<Add />
				</IconButton>
			</p>
		</>
	);
};

export default WhiteNoise;
