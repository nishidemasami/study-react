// 簡易OS判定
export function detectOSSimply(): "iphone" | "android" | "pc" {
	if (
		navigator.userAgent.indexOf("iPhone") > 0 ||
		navigator.userAgent.indexOf("iPad") > 0 ||
		navigator.userAgent.indexOf("Macintosh") > 0 ||
		navigator.userAgent.indexOf("iPod") > 0
	) {
		return "iphone";
	}
	if (navigator.userAgent.indexOf("Android") > 0) {
		return "android";
	}
	return "pc";
}
