import { getTimeOffsetSinceStartOfDay } from "../time-offset";

const makeSut = () => {
	return { sut: getTimeOffsetSinceStartOfDay };
};

const getNow = (time: `${number}:${number}:${number}`) => {
	const [h, m, s] = time.split(":").map(Number);
	const now = new Date();
	return new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, s, 0);
};

describe("getTimeOffsetSinceStartOfDay", () => {
	test("should return 0 when [ now = start of day ]", () => {
		const { sut } = makeSut();
		const now = getNow("00:00:00");

		expect(sut(now)).toBe(0);
	});

	test("should return [ 1000 ] when [ now = 00:00:01 ]", () => {
		const { sut } = makeSut();
		const now = getNow("00:00:01");

		expect(sut(now)).toBe(1000);
	});

	test("should return [ 43,200,000 ] when [ now = 12:00:00 ]", () => {
		const { sut } = makeSut();
		const now = getNow("12:00:00");

		expect(sut(now)).toBe(43200000);
		expect(sut(now)).toBe(12 * 60 * 60 * 1000);
	});
});
