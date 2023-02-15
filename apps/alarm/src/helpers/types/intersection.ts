import { IfEquals } from "./equals";

export declare namespace Intersect {
	/**
	 * Get all the keys that exists in both objects at the same time
	 */
	export type KeysInBoth<S1, S2> = keyof (S1 | S2);

	/**
	 * The intersect of all the common properties between two types.
	 *
	 * For every key that exists in both types, returns the union of them
	 */
	export type SameKeys<S1, S2> = { [K in keyof (S1 | S2)]: S1[K] | S2[K] };

	/**
	 * The Right Merge of two types, but with only the keys that exists in both types, and with matching values
	 * for every given key
	 */
	export type Strict<S1, S2> = {
		[K in keyof (S1 | S2)]: IfEquals<S2[K], S1[K], never, K>;
	}[keyof (S1 | S2)];
}
