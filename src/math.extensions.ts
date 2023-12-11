export {};

Math.randomInt = function (max: number): number {
	return Math.floor(Math.random() * max);
};

Math.randomIntInclusive = function (min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};
