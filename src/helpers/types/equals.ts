import { IfDict } from "./dict";
import { IfNever } from "./never";
import { Foo } from "./utils";

/**
 * Extracted from {@link https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650}
 *
 */
export type LightEqual<Left, Right> = (<T>() => T extends Left ? "one" : "two") extends <
	T
>() => T extends Right ? "one" : "two"
	? 1
	: 0;

/**
 * Extracted from {@link https://github.com/aleclarson/spec.ts/blob/master/index.d.ts}
 */
abstract class Any {
	private _!: true;
}
type IsAny<T> = Any extends T ? ([T] extends [Any] ? 1 : 0) : 0;

/**
 * Extracted from {@link https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650}
 *
 */
type TestExact<Left, Right> = (<U>() => U extends Left ? 1 : 0) extends <U>() => U extends Right
	? 1
	: 0
	? Any
	: never;
export type Test<Left, Right> = IsAny<Left> extends 1
	? IsAny<Right> extends 1
		? 1
		: "❌ Left type is 'any' but right type is not"
	: IsAny<Right> extends 1
	? "❌ Right type is 'any' but left type is not"
	: [Left] extends [Right]
	? [Right] extends [Left]
		? Any extends TestExact<Left, Right>
			? 1
			: "❌ Unexpected or missing 'readonly' property"
		: "❌ Right type is not assignable to left type"
	: "❌ Left type is not assignable to right type";

type UncommonKeysBetween<A1, A2> = Exclude<keyof A1 | keyof A2, keyof (A1 | A2)>;
type KeysWithDiffTypes<A1, A2> = {
	[K in keyof (A1 | A2)]: LightEqual<A1[K], A2[K]> extends 1 ? never : K;
}[keyof (A1 | A2)];

type IfBothAreDicts<A1, A2, If, Else> = IfDict<A1, IfDict<A2, If, Else>, Else>;
type IfDictValuesAtSomeKeysAreDiff<A1, A2, DiffKeys extends keyof (A1 | A2)> = IfNever<
	DiffKeys,
	1,
	`dict values are diff at: ${Extract<DiffKeys, string>}`
>;
type IsSameDict<A1, A2> = IfBothAreDicts<
	A1,
	A2,
	IfNever<
		UncommonKeysBetween<A1, A2>,
		IfDictValuesAtSomeKeysAreDiff<A1, A2, KeysWithDiffTypes<A1, A2>>,
		"dicts-keys-are-diff"
	>,
	"one-type-is-not-a-dict"
>;

type IfBothAreFns<A1, A2, If, Else> = A1 extends Foo ? (A2 extends Foo ? If : Else) : Else;
// type IfEqualDict<Left, Right, OnEqual, OnDiff> = IfDict<Left, IfDictRight<Right, >>

/**
 * Test if 2 types are strictly the same [lightweight version]
 *
 * @wildcard A - the first type to check
 * @wildcard B - the second type to check
 * @wildcard OnEqual - result type in case [ A === B]
 * @wildcard OnDiff - result type in case [ A !== B ]
 *
 * @returns OnEqual if [ A === B ], otherwise returns OnDiff
 */
export type IfLightEquals<Left, Right, OnEqual, OnDiff> = LightEqual<Left, Right> extends 1
	? OnEqual
	: OnDiff;

/**
 * Test if 2 types are strictly the same
 *
 * @wildcard A - the first type to check
 * @wildcard B - the second type to check
 * @wildcard OnEqual - result type in case [ A === B]
 * @wildcard OnDiff - result type in case [ A !== B ]
 *
 * @returns OnEqual if [ A === B ], otherwise returns OnDiff
 */
export type IfEquals<Left, Right, OnEqual, OnDiff> = IfBothAreFns<
	Left,
	Right,
	IfLightEquals<Left, Right, OnEqual, OnDiff>,
	Test<Left, Right> extends 1
		? OnEqual
		: IsSameDict<Left, Right> extends number
		? OnEqual
		: OnDiff
>;
