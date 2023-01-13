import { CreateStyleAdapter, CreateStyleFnAdapter } from './index';

const makeSut = () => {
	const sut = new CreateStyleAdapter(new CreateStyleFnAdapter());
	return { sut };
};

describe('StyleBuilder - CreateStyle Tests', () => {
	test('The output should be a function', () => {
		const { sut } = makeSut();

		const createFn = sut.generate();

		expect(createFn).toBeDefined();
		expect(createFn).toBeInstanceOf(Function);
	});

	test('The output should have the property [text] defined, and it should also be a function', () => {
		const { sut } = makeSut();

		const createFn = sut.generate();

		expect(createFn.text).toBeDefined();
		expect(createFn.text).toBeInstanceOf(Function);
	});

	test('The output should have the property [image] defined, and it should also be a function', () => {
		const { sut } = makeSut();

		const createFn = sut.generate();

		expect(createFn.image).toBeDefined();
		expect(createFn.image).toBeInstanceOf(Function);
	});

	test('The output should have the property [view] defined, and it should also be a function', () => {
		const { sut } = makeSut();

		const createFn = sut.generate();

		expect(createFn.view).toBeDefined();
		expect(createFn.view).toBeInstanceOf(Function);
	});
});
