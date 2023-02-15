import { useMemo } from "react";
import { IDateTimeTransformValue } from "../types";

export const useDateTimeValueTransform = <V extends any>(
	propsTransform: IDateTimeTransformValue<V> | undefined
) => {
	const transform: IDateTimeTransformValue<any> = useMemo(() => {
		if (propsTransform) return propsTransform;
		return {
			toDate: value => value,
			toValue: (date: Date) => date,
		};
	}, []);
	return transform;
};
