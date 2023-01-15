import { TTest } from "./__helpers";
import { Merge } from "../merge";

type NonIntersectKeys = "b" | "c";

type A = { a: number; b: string };
type B = { a: boolean; c: [] };

type Value = Merge.Left<A, B>;

type __IsMissing<Key extends NonIntersectKeys> = never;

type _ = [
	// "a" should exist in merged value
	TTest.Expect.HasKey<Value, "a">,

	// "a" should be number
	TTest.Expect.True<TTest._.PropExtends<Value["a"], number>>,

	// "a" should not be boolean
	TTest.Expect.False<TTest._.PropExtends<Value["a"], boolean>>,

	// "b" should not exist in merged value
	__IsMissing<"b">,

	// "c" should not exist in merged value
	__IsMissing<"c">
];
