import { TTest } from "./__helpers";
import { IfNever } from "../never";
import { Foo } from "../utils";

type Sut<Value> = IfNever<Value, TTest.Value.True, TTest.Value.False>;

type _ = [
	// number is not never
	TTest.Expect.False<Sut<number>>,

	// string is not never
	TTest.Expect.False<Sut<string>>,

	// symbol is not never
	TTest.Expect.False<Sut<symbol>>,

	// object is not never
	TTest.Expect.False<Sut<object>>,

	// function is not never
	TTest.Expect.False<Sut<Foo>>,

	// array is not never
	TTest.Expect.False<Sut<any[]>>
];

type GroupValues = [
	// any is any
	TTest.Expect.False<Sut<any>>,

	// unknown is not never
	TTest.Expect.False<Sut<unknown>>,

	// never is never
	TTest.Expect.True<Sut<never>>
];
