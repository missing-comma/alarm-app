import { TTest } from "./__helpers";
import { IfDict } from "../dict";
import { Foo } from "../utils";

type Sut<Value> = IfDict<Value, TTest.Value.True, TTest.Value.False>;

// declare namespace LocalTest {
// 	type Enabled = 1;
// 	type Debug<Result, Type, CorrectValue> = Enabled extends 1
// 		? Type extends "true"
// 			? Result extends `c:${string}`
// 				? Result
// 				: CorrectValue
// 			: Type extends "false"
// 			? Result extends `c:${string}`
// 				? CorrectValue
// 				: Result
// 			: Result
// 		: Result;
// 	type TruishValue = Enabled extends 1 ? `${string}c:${string}` : TTest.Value.True;
// 	type FalsyshValue = Enabled extends 1 ? `${string}f:${string}` : TTest.Value.False;

// 	export type True<A extends TruishValue> = A extends TruishValue ? "ok-T" : A;
// 	export type False<A extends FalsyshValue> = A extends FalsyshValue ? "ok-F" : A;
// }

type _ = [
	// empty object is dict
	TTest.Expect.True<Sut<{}>>,

	// object with defined keys is dict
	TTest.Expect.True<Sut<{ a: string }>>,

	// object is dict
	TTest.Expect.True<Sut<object>>,

	// object with index as string is dict
	TTest.Expect.True<Sut<Record<string, any>>>,

	// object with index as number is not dict
	TTest.Expect.False<Sut<Record<number, any>>>,

	// function is not dict
	TTest.Expect.True<Sut<Foo>>,

	// array is not dict
	TTest.Expect.False<Sut<any[]>>,

	// string is not dict
	TTest.Expect.False<Sut<string>>,

	// template-string is not dict
	TTest.Expect.False<Sut<"any-string">>,

	// number is not dict
	TTest.Expect.False<Sut<number>>,

	// number is not dict
	TTest.Expect.False<Sut<boolean>>,

	// number is not dict
	TTest.Expect.False<Sut<symbol>>
];

type GroupValues = [
	// any is dict
	TTest.Expect.True<Sut<any>>,

	// unknown is not dict
	// TTest.Expect.False<Sut<unknown>>,

	// never is not dict
	TTest.Expect.False<Sut<never>>
];
