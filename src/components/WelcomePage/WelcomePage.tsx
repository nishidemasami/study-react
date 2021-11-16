import {
	Box,
	Button,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import { useDispatch } from "../../redux/hooks";
import { actions, menuList } from "../../redux/state/app";
import { DividedDiv, SitemapCard } from "../Common/Styled";
import MenuItems from "../Menu/MenuItems";

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

				<Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
					{menuList
						.map((menu) => ({ menu, site: MenuItems[menu] }))
						.map(({ menu, site }) => (
							<SitemapCard
								key={site.name}
								sx={{
									minWidth: 275,
									maxWidth: "75%",
									flexGrow: 1,
									overflow: "hidden",
									px: 3,
								}}
							>
								<CardContent>
									<Typography
										color="text.secondary"
										gutterBottom
										sx={{ fontSize: 14 }}
									>
										ページ
									</Typography>
									<Typography component="div" variant="h5">
										{site.icon}
										{site.name}
									</Typography>
									<Typography variant="body2">{site.description}</Typography>
								</CardContent>
								{menu === "welcomePage" ? null : (
									<CardActions>
										<Button
											onClick={() => dispatch(actions.setComponent(menu))}
											onKeyPress={() => dispatch(actions.setComponent(menu))}
											size="small"
										>
											移動
										</Button>
									</CardActions>
								)}
							</SitemapCard>
						))}
				</Box>
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
