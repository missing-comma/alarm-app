import { TTest } from "./__helpers";
import { IfAny } from "../any";
import { Foo } from "../utils";

type Sut<Value> = IfAny<Value, TTest.Value.True, TTest.Value.False>;

type _ = [
	// number is not any
	TTest.Expect.False<Sut<number>>,

	// string is not any
	TTest.Expect.False<Sut<string>>,

	// symbol is not any
	TTest.Expect.False<Sut<symbol>>,

	// object is not any
	TTest.Expect.False<Sut<object>>,

	// function is not any
	TTest.Expect.False<Sut<Foo>>,

	// array is not any
	TTest.Expect.False<Sut<any[]>>
];

type GroupValues = [
	// any is any
	TTest.Expect.True<Sut<any>>,

	// unknown is not any
	TTest.Expect.False<Sut<unknown>>,

	// never is not any
	TTest.Expect.False<Sut<never>>
];
