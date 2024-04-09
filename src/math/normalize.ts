export default function normalize(x: number, y: number) {
	let len = x * x + y * y;
	if(len > 0) {
		len = 1 / Math.sqrt(len);

		return {
			x: x * len,
			y: y * len
		};
	} else {
		return {
			x,
			y
		};
	}
}