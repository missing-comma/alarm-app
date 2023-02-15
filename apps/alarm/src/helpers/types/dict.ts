import { IfAny } from "./any";
import { IfNever } from "./never";
import { IfPrimitive } from "./primitive";

type ArrayLike = {
	/** Iterator of values in the array. */
	[Symbol.iterator](): IterableIterator<number>;
	/**
	 * Returns an iterable of keys in the array
	 */
	keys(): IterableIterator<number>;
};

type IfArray<S, OnArray, OnNotArray> = S extends ArrayLike ? OnArray : OnNotArray;
type IfHasOnlyStringKeys<S, If, Else> = S extends Readonly<Record<string, any>>
	? keyof S extends number | symbol
		? Else
		: If
	: Else;
type IfRecordLike<S, If, Else> = S extends (...args: any) => any
	? Else
	: IfHasOnlyStringKeys<S, If, Else>;
type IfEmptyDict<V, OnEmptyDict, OnNotEmptyDict> = IfNever<keyof V, OnEmptyDict, OnNotEmptyDict>;

type Reason<S, Def extends string> = S; //`IfDict: ${Def}`;

export type IfDict<S, OnDict, OnNotDict = never> = IfAny<
	S,
	Reason<OnDict, "c:is-any">,
	IfPrimitive<
		S,
		Reason<OnNotDict, "f:is-primitive">,
		IfArray<
			S,
			Reason<OnNotDict, "f:is-array">,
			IfRecordLike<
				S,
				Reason<OnDict, "c:record-like">,
				IfEmptyDict<S, Reason<OnDict, "c:empty-dict">, Reason<OnNotDict, "f:not-empty">>
			>
		>
	>
>;
