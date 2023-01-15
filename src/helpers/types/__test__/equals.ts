import { TTest } from "./__helpers";
import { IfEquals, LightEqual } from "../equals";

type Sut<A, B> = IfEquals<A, B, TTest.Value.True, TTest.Value.False>;
// type Sut<A, B> = LightEqual<A, B> extends 1 ? TTest.Value.True : TTest.Value.False;

type SutEquals<A extends TTest.Value.True> = A;
type SutDiffs<A extends TTest.Value.False> = A;
// type SutEquals<A > = A;
// type SutDiffs<A> = A;

type T1 = string;
type T2 = number;

type EqualCases = [
	SutEquals<Sut<{ a: T1 }, { a: T1 }>>,
	SutEquals<Sut<{ a: T1 } & { b: T2 }, { a: T1; b: T2 }>>,
	SutEquals<Sut<number, number>>,
	SutEquals<Sut<string, string>>,
	SutEquals<Sut<boolean, boolean>>,
	SutEquals<Sut<{}, {}>>,
	SutEquals<Sut<any, any>>
];
type _EqualCasesTest = TTest.Expect.All.True<EqualCases>;

type DiffCases = [
	SutDiffs<Sut<{ a: T1 }, { a: T2 }>>,
	SutDiffs<Sut<{ (): string; (x: string): number }, { (x: string): number; (): string }>>,

	SutDiffs<Sut<1, 0>>,
	SutDiffs<Sut<1, number>>,
	SutDiffs<Sut<number, 1>>,

	SutDiffs<Sut<"a", "b">>,
	SutDiffs<Sut<"a", string>>,
	SutDiffs<Sut<string, "a">>,

	SutDiffs<Sut<true, false>>,
	SutDiffs<Sut<true, boolean>>,
	SutDiffs<Sut<boolean, true>>,

	SutDiffs<Sut<number, string>>,
	SutDiffs<Sut<string, boolean>>,
	SutDiffs<Sut<boolean, number>>
];
type _DiffCasesTest = TTest.Expect.All.False<DiffCases>;

/**
 * Functions
 */
type FooT1 = () => void;
type FooT2 = (a: string) => boolean;
type FooT3 = (a: string) => number;
type FooT4 = (a: number) => boolean;
type FooT5 = (a: string, b: boolean) => boolean;
type FooT6 = (a: string | number) => boolean;

type EqualFunctionCases = [
	SutEquals<Sut<FooT1, FooT1>>,
	SutEquals<Sut<FooT2, FooT2>>,
	SutEquals<Sut<FooT3, FooT3>>,
	SutEquals<Sut<FooT4, FooT4>>,
	SutEquals<Sut<FooT5, FooT5>>
];
type _EqualFunctionCasesTest = TTest.Expect.All.True<EqualFunctionCases>;

type DiffFunctionCases = [
	SutDiffs<Sut<FooT2, FooT6>>,

	SutDiffs<Sut<FooT1, FooT2>>,
	SutDiffs<Sut<FooT1, FooT3>>,
	SutDiffs<Sut<FooT1, FooT4>>,
	SutDiffs<Sut<FooT1, FooT5>>,

	SutDiffs<Sut<FooT2, FooT1>>,
	SutDiffs<Sut<FooT2, FooT3>>,
	SutDiffs<Sut<FooT2, FooT4>>,
	SutDiffs<Sut<FooT2, FooT5>>,

	SutDiffs<Sut<FooT3, FooT2>>,
	SutDiffs<Sut<FooT3, FooT1>>,
	SutDiffs<Sut<FooT3, FooT4>>,
	SutDiffs<Sut<FooT3, FooT5>>,

	SutDiffs<Sut<FooT4, FooT2>>,
	SutDiffs<Sut<FooT4, FooT3>>,
	SutDiffs<Sut<FooT4, FooT1>>,
	SutDiffs<Sut<FooT4, FooT5>>,

	SutDiffs<Sut<FooT5, FooT2>>,
	SutDiffs<Sut<FooT5, FooT3>>,
	SutDiffs<Sut<FooT5, FooT4>>,
	SutDiffs<Sut<FooT5, FooT1>>
];
type _DiffFunctionCasesTest = TTest.Expect.All.False<DiffFunctionCases>;
