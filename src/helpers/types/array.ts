/**
 * Adapted from {@link https://stackoverflow.com/a/59906630/7050326}
 */

import { Merge } from "./merge";

type ArrayLengthMutationKeys = "splice" | "push" | "pop" | "shift" | "unshift" | number;
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never;
type FixedLengthArrayFromArray<T extends any[]> = Pick<
	T,
	Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> };

export type TupleArray<V, Size extends number> = Merge.Left<
	FixedLengthArrayFromArray<V[]>,
	{ length: Size }
>;
