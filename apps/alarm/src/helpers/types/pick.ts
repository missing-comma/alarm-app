export declare namespace Pick {
	export type OfType<S extends Record<PropertyKey, any>, Target> = Pick<
		S,
		keyof { [K in keyof (S | Target)]: S[K] extends Target ? K : never }
	>;

	export type Loose<S1, Keys extends PropertyKey> = Pick<S1, Extract<keyof S1, Keys>>;
}
