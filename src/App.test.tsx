import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

test("renders learn react link", async () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const elements = screen.getAllByText(/ようこそ/i);
	elements.forEach((element) => {
		expect(element).toBeInTheDocument();
	});

	userEvent.click(screen.getAllByRole("button")[0]);
	[/閉じる/i, /ようこそ/i, /カウントアップ/i, /ロゴまわし/i, /ヘルプ/i].forEach(
		(regex) =>
			screen
				.getAllByText(regex)
				.forEach((element) => expect(element).toBeInTheDocument())
	);
});
