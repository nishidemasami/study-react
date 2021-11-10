/**
 * カラーコードの正規表現
 */
const HTMLColorCodeRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

/**
 * #000000～#FFFFFFの中からランダムの色を返します
 *
 * @returns ランダムの色
 */
const getRandomColor = (): string =>
	`#${Math.floor(Math.random() * 16777216)
		.toString(16)
		.padStart(6, "0")}`;

/**
 * HTML カラーコードが正しいかどうか判定します
 *
 * @returns 正しい
 */
const checkHTMLColor = (color: string): boolean =>
	HTMLColorCodeRegex.test(color);

export { getRandomColor, checkHTMLColor, HTMLColorCodeRegex };
