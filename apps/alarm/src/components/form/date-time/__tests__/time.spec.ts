import defaultTransform from "../helpers/default-time-transform";

const makeSut = () => {
	return { sut: defaultTransform };
};

const getNow = (time: `${number}:${number}:${number}`) => {
	const [h, m, s] = time.split(":").map(Number);
	const now = new Date();
	return new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, s, 0);
};

describe("TimeInput", () => {
	describe("default transformValue", () => {
		const pairs: Array<[`${number}:${number}:${number}`, number]> = [
			["00:00:00", 0],
			["00:00:01", 1000],
			["00:00:10", 10 * 1000],
			["00:01:00", 60 * 1000],
			["12:00:00", 12 * 60 * 60 * 1000],
		];

		describe("toDate should map [ ms since start of date ] to [ date ]", () => {
			test.each(pairs)(`[%s] => [%i]`, (timeStr, time) => {
				const { sut } = makeSut();
				expect(sut.toDate(time)).toStrictEqual(getNow(timeStr));
			});
		});

		describe("toValue should map [ date ] to [ ms since start of date ]", () => {
			const reversed = pairs.map(row => Array.from(row).reverse()) as any[];
			test.each(reversed)(`[%i] => [%s]`, (time, timeStr) => {
				const { sut } = makeSut();
				expect(sut.toValue(getNow(timeStr))).toStrictEqual(time);
			});
		});
	});
});
