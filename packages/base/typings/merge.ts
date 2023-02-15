export declare namespace Merge {
	// type LoosePick<S1, Keys extends PropertyKey> = Pick<S1, Extract<keyof S1, Keys>>;

	// type IntersectionKeys<S1, S2> = Extract<keyof S2, keyof S1> | Extract<keyof S1, keyof S2>;
	// type Intersection<S1, S2> = Pick<S1, IntersectionKeys<S1,S2>>;

	// type DifferentKeys<S1, S2> = Exclude<(keyof S1)|(keyof S2), IntersectionKeys<S2,S1>>
	// type Difference<S1, S2> = LoosePick<S1, DifferentKeys<S1,S2>>

	export type Left<S1, S2> = S1 & Omit<S2, keyof S1>;

	export type Right<S1, S2> = Left<S2, S1>;
}
