export declare namespace TTest {
	namespace Expect {
		export type True<Result extends TTest.Value.True> = Result;
		export type False<Result extends TTest.Value.False> = Result;

		export type HasKey<S, K extends keyof S> = S;

		export type MissingKey<
			S,
			K extends Exclude<AllPossibleKeys, keyof S>,
			AllPossibleKeys = keyof S
		> = S;

		namespace All {
			type AnyKindOfArr<V> = readonly [V, V] | readonly V[];
			export type True<Results extends AnyKindOfArr<TTest.Value.True>> = Results;
			export type False<Results extends AnyKindOfArr<TTest.Value.False>> = Results;
		}
	}

	namespace Value {
		export type True = "true";
		export type False = "false";
	}

	namespace _ {
		export type PropExtends<Prop, Type> = Prop extends Type
			? TTest.Value.True
			: TTest.Value.False;
	}

	/**
	 * Extracted from {@link https://github.com/aleclarson/spec.ts/blob/master/index.d.ts}
	 */
	class Any {
		private _: true;
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
}
