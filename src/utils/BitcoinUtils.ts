import crypto from "crypto";
import { base58encode } from "./Base58Utils";
import { bech32 } from "./Bech32Utils";

function sha256(data: crypto.BinaryLike): Buffer {
	return crypto.createHash("sha256").update(data).digest();
}

function ripemd160(data: crypto.BinaryLike): Buffer {
	return crypto.createHash("ripemd160").update(data).digest();
}

function calcChecksum(data: crypto.BinaryLike) {
	return sha256(sha256(data)).slice(0, 4);
}

function base58WithChecksum(data: Uint8Array) {
	const result = new Uint8Array(data.length + 4);
	result.set(data);
	result.set(calcChecksum(data), data.length);
	return base58encode(result);
}

export function genBitcoinAddress(publicKey: Uint8Array): string {
	if (publicKey.length !== 65) {
		throw new Error("publicKey is not 65 byte length Exception");
	}
	const sha256edpayload = sha256(publicKey);
	const ripemded160payload = ripemd160(sha256edpayload);

	const payload = new Uint8Array(21);
	payload.set([0]);
	payload.set(ripemded160payload, 1);
	return base58WithChecksum(payload);
}

function bech32WithChecksum(data: Uint8Array) {
	// const result = new Uint8Array(data.length + 4);
	// result.set(data);
	// result.set(calcChecksum(data), data.length);
	return bech32.encode("bc", bech32.toWords(data));
}

export function genBitcoinAddressBECH32(publicKey: Uint8Array): string {
	if (publicKey.length !== 65) {
		throw new Error("publicKey is not 65 byte length Exception");
	}
	const sha256edpayload = sha256(publicKey);
	const ripemded160payload = ripemd160(sha256edpayload);

	const payload = new Uint8Array(21);
	payload.set([0x00, 0x14]);
	payload.set(ripemded160payload, 1);
	return bech32WithChecksum(payload);
}

export function genWif(privateKey: Uint8Array): string {
	const payload = new Uint8Array(privateKey.length + 1);
	payload.set([0x80]);
	payload.set(privateKey, 1);
	return base58WithChecksum(payload);
}
