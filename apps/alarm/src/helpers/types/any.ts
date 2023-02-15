/**
 * Extracted from {@link https://github.com/aleclarson/spec.ts/blob/master/index.d.ts}
 */
abstract class Any {
	private _!: true;
}
type IsAny<T> = Any extends T ? ([T] extends [Any] ? 1 : 0) : 0;

/**
 * Test if a type is [any]
 *
 * @wildcard T - type to check against [any]
 * @wildcard OnEqual - result type in case [T === any]
 * @wildcard OnDiff - result type in case [T !== any]
 *
 * @returns OnEqual if [ T === any ], otherwise returns OnDiff
 */
export type IfAny<T, OnEqual, OnDiff> = IsAny<T> extends 1 ? OnEqual : OnDiff;
