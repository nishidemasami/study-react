import { randomBytes } from "crypto";
import { useCallback } from "react";
import secp256k1 from "secp256k1";
import { useDispatch } from "../../redux/hooks";
import { actions } from "../../redux/state/bitcoin";
import { genBitcoinAddress, genWif } from "../../utils/BitcoinUtils";
import { Uint8ArrayToNumberArray } from "../../utils/Uint8ArrayUtils";

export const useBitcoinAddress = (): (() => void) => {
	const dispatch = useDispatch();

	return useCallback(() => {
		// generate message to sign
		// message should have 32-byte length, if you have some other length you can hash message
		// for example `msg = sha256(rawMessage)`
		const msg = randomBytes(32);

		// generate privKey
		let privKey;
		do {
			privKey = randomBytes(32);
		} while (!secp256k1.privateKeyVerify(privKey));

		// get the public key in a compressed format
		const pubKey = secp256k1.publicKeyCreate(privKey, false);

		// sign the message
		const sigObj = secp256k1.ecdsaSign(msg, privKey);

		// verify the signature
		if (secp256k1.ecdsaVerify(sigObj.signature, msg, pubKey)) {
			dispatch(actions.setPublicKey(Uint8ArrayToNumberArray(pubKey)));
			dispatch(actions.setBitcoinAddress(genBitcoinAddress(pubKey)));
			dispatch(actions.setWif(genWif(privKey)));
		} else {
			dispatch(actions.setPublicKey([]));
			dispatch(actions.setBitcoinAddress(""));
			dispatch(actions.setWif(""));
			actions.setBitcoinAddress("エラー発生");
		}
	}, [dispatch]);
};
