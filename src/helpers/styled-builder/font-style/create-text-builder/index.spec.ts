import { BuildFontStyle } from "./index";
import { IStyleBuilderCreateFontStyle, StyleBuilderFontStyleBuild } from "../protocol";

const makeSut = () => {
	const fontService: IStyleBuilderCreateFontStyle = {
		create: jest.fn(),
	};
	const sut: StyleBuilderFontStyleBuild = new BuildFontStyle(fontService);
	return { sut, stubs: { fontService } };
};

describe("StyleBuilder - Font - createTextBuilder tests", () => {
	test("Should return a function", () => {
		const { sut } = makeSut();

		expect(sut.build({})).toBeInstanceOf(Function);
	});

	test("the returned function should return a valid style", () => {
		const { sut, stubs } = makeSut();
		jest.spyOn(stubs.fontService, "create").mockReturnValueOnce("valid-style" as any);

		const styleFn = sut.build({ color: "white" });

		expect(styleFn({})).toBe("valid-style");
	});

	test("the returned function should call FontService with merged parameters of both functions", () => {
		const { sut, stubs } = makeSut();

		const fontServiceCreateSpy = jest.spyOn(stubs.fontService, "create");
		sut.build({ color: "white", font: "space-mono" } as any)({ size: 16, padding: 10 });

		expect(fontServiceCreateSpy).toHaveBeenCalledWith("space-mono", 16, "white", {
			padding: 10,
		});
	});

	test("the returned function should call FontService with correct parameters", () => {
		const { sut, stubs } = makeSut();

		const fontServiceCreateSpy = jest.spyOn(stubs.fontService, "create");
		sut.build({ color: "white", font: "space-mono", size: 16, padding: 10 })();

		expect(fontServiceCreateSpy).toHaveBeenCalledWith("space-mono", 16, "white", {
			padding: 10,
		});
	});

	test("the returned function should support receiving no parameters", () => {
		const { sut } = makeSut();

		const styleFn = sut.build({ color: "white" });

		expect(() => styleFn()).not.toThrow();
	});

	test("should support multiple style parameters", () => {
		const { sut } = makeSut();

		const styleFn = sut.build("space-mono", 12, "white");

		expect(styleFn()).toStrictEqual(
			sut.build({
				font: "space-mono",
				size: 12,
				color: "white",
			})()
		);
	});
});
