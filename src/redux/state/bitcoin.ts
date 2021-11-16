import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface BitcoinState {
	/**
	 * 公開鍵
	 * 65byteのバイト配列
	 *  */
	publicKey: number[];
	/**
	 * 秘密鍵
	 * 32byteのバイト配列
	 *  */
	secretKey: number[];
	/**
	 * ビットコインアドレス
	 * base58(P2PKH)形式
	 *  */
	bitcoinAddress: string;
	/**
	 * ビットコインアドレス
	 * BECH32(P2WPKH)形式
	 *  */
	bitcoinAddressBECH32: string;
	/**
	 * 秘密鍵
	 * WIF形式
	 *  */
	wif: string;
}

// Define the initial state using that type
const initialState: BitcoinState = {
	publicKey: [],
	secretKey: [],
	bitcoinAddress: "",
	bitcoinAddressBECH32: "",
	wif: "",
};
const BitcoinSlice = createSlice({
	name: "bitcoin",
	initialState,
	reducers: {
		setPublicKey: (state, action: PayloadAction<typeof state.publicKey>) => {
			state.publicKey = action.payload;
		},
		setSecretKey: (state, action: PayloadAction<typeof state.secretKey>) => {
			state.secretKey = action.payload;
		},
		setWif: (state, action: PayloadAction<typeof state.wif>) => {
			state.wif = action.payload;
		},
		setBitcoinAddress: (
			state,
			action: PayloadAction<typeof state.bitcoinAddress>
		) => {
			state.bitcoinAddress = action.payload;
		},
		setBitcoinAddressBECH32: (
			state,
			action: PayloadAction<typeof state.bitcoinAddressBECH32>
		) => {
			state.bitcoinAddressBECH32 = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions } = BitcoinSlice;

const BitcoinReducer = BitcoinSlice.reducer;
export default BitcoinReducer;
