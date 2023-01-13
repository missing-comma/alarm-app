import { CreateFontStyle } from "./index";

const makeSut = () => {
	const sut = new CreateFontStyle();
	return { sut };
};

describe("StyleBuilder - Font - createTextStyle tests", () => {
	const props = ["fontFamily", "fontSize", "color"] as const;
	test.each(props.map((value, index) => [value, index]))(
		"Should not inject %1 property in style if it is [undefined or null]",
		(prop, index) => {
			const { sut } = makeSut();

			const args: any[] = ["any", "any", "any", {}];
			args[index] = null;

			const style = sut.create(...args);

			expect(style).not.toHaveProperty(prop);
		}
	);
});
