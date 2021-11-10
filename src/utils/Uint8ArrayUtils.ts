export function Uint8ArrayToHex(prm: Uint8Array): string {
	return Buffer.from(prm.buffer).toString("hex");
}

export function Uint8ArrayToNumberArray(prm: Uint8Array): number[] {
	const result: number[] = [];
	prm.forEach((value) => result.push(value));
	return result;
}
