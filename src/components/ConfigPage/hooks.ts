import { useState } from "react";

/**
 * フック
 *
 * @param カラーピッカーの初期色
 * @returns カラーピッカーを表示するかのフラグと、カラーピッカーのカラー保持用変数
 */
export const useShowColorPicker = (): {
	showColorPicker: boolean;
	setShowColorPicker: (showColorPicker: boolean) => void;
} => {
	const [showColorPicker, setShowColorPicker] = useState(false);

	return { showColorPicker, setShowColorPicker };
};
