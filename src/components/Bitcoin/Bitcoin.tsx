import { Button } from "@mui/material";
import { shallowEqual } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { WordWrapP } from "../Common/Styled";
import { useBitcoinAddress } from "./Bitcoin.hooks";

const Bitcoin: React.VFC = () => {
	const { bitcoinState } = useSelector(
		(state: RootState) => state,
		shallowEqual
	);

	return (
		<>
			<Button
				color="secondary"
				onClick={useBitcoinAddress()}
				variant="contained"
			>
				ビットコインアドレス生成
			</Button>
			<p>ビットコインアドレス(BASE58(P2PKH)形式)：</p>
			<WordWrapP>{bitcoinState.bitcoinAddress}</WordWrapP>
			{/* <p>ビットコインアドレス(BECH32(P2WPKH)形式)：</p>
			<WordWrapP>{bitcoinState.bitcoinAddressBECH32}</WordWrapP> */}
			<p>秘密鍵(WIF形式)：</p>
			<WordWrapP>{bitcoinState.wif}</WordWrapP>
		</>
	);
};

export default Bitcoin;
