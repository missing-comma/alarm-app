import { TTest } from "./__helpers";
import { IfPrimitive } from "../primitive";
import { Foo } from "../utils";

type Sut<Value> = IfPrimitive<Value, TTest.Value.True, TTest.Value.False>;

type _ = [
	// number is primitive
	TTest.Expect.True<Sut<number>>,

	// string is primitive
	TTest.Expect.True<Sut<string>>,

	// symbol is primitive
	TTest.Expect.True<Sut<symbol>>,

	// object is not primitive
	TTest.Expect.False<Sut<object>>,

	// function is not primitive
	TTest.Expect.False<Sut<Foo>>,

	// array is not primitive
	TTest.Expect.False<Sut<any[]>>
];

type GroupValues = [
	// any is primitive
	TTest.Expect.True<Sut<any>>,

	// unknown is not primitive
	TTest.Expect.False<Sut<unknown>>,

	// never is not primitive
	TTest.Expect.False<Sut<never>>
];
