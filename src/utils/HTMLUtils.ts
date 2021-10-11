/**
 * rgb(0,0,0)～rgb(255,255,255)の中からランダムの色を返します
 *
 * @returns ランダムの色
 */
export const getRandomColor: () => string = (): string =>
	`rgb(${Math.floor(Math.random() * 256)},${Math.floor(
		Math.random() * 256
	)},${Math.floor(Math.random() * 256)})`;
