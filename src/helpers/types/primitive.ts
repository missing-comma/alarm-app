import { IfAny } from "./any";
import { IfNever } from "./never";

type Reason<S, Def extends string> = S; // `ifPrimitive: ${Def}`;

export type IfPrimitive<A, OnPrimitive, OnNotPrimitive> =
	// If never - is primitive
	IfNever<
		A,
		Reason<OnNotPrimitive, "is-never">,
		// If any - is primitive
		IfAny<
			A,
			OnPrimitive,
			A extends string | number | boolean | undefined | null | symbol
				? OnPrimitive
				: Reason<OnNotPrimitive, "not-string-number-boolean-undefied-null-symbol">
		>
	>;
