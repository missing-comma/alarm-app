type IsNever<T> = [T] extends [never] ? 1 : 0;

/**
 * Test if a type is [never]
 *
 * @wildcard T - type to check against [never]
 * @wildcard OnEqual - result type in case [T === never]
 * @wildcard OnDiff - result type in case [T !== never]
 *
 * @returns OnEqual if [ T === never ], otherwise returns OnDiff
 */
export type IfNever<T, OnEqual, OnDiff> = IsNever<T> extends 1 ? OnEqual : OnDiff;
