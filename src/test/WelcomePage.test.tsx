import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import WelcomePage from "../components/WelcomePage";
import { store } from "../redux/store";

test("renders learn react link", async () => {
	render(
		<Provider store={store}>
			<WelcomePage />
		</Provider>
	);
	const elements = screen.getAllByText(/このページはReact練習用ページです/i);
	elements.forEach((element) => {
		expect(element).toBeInTheDocument();
	});

	userEvent.click(screen.getAllByRole("button")[0]);
	[/ようこそ/i, /カウントアップ/i, /ロゴまわし/i, /ヘルプ/i].forEach((regex) =>
		screen
			.getAllByText(regex)
			.forEach((element) => expect(element).toBeInTheDocument())
	);
});
