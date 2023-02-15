import { CreateStyleFnAdapter } from './index';

const makeSut = () => {
	const sut = new CreateStyleFnAdapter().create();
	return { sut };
};

describe('StyleBuilder - CreateStyle - CreateStyleFn tests', () => {
	test('If the style parameter is a function, should return the output of it', () => {
		const { sut } = makeSut();

		const style: any = 'valid-style';

		expect(sut(() => style)).toBe(style);
	});

	test('If the style parameter is not a function, should return the style parameter', () => {
		const { sut } = makeSut();

		const style: any = 'valid-style';

		expect(sut(style)).toBe(style);
	});
});
