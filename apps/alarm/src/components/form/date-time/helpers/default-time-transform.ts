import { IDateTimeTransformValue } from "../component";
import startOfDay from "date-fns/startOfDay";
import { getTimeOffsetSinceStartOfDay } from "../../../../helpers/time-offset";

const wrap = (obj: any) => {
	return obj;
	// const out: any = {};
	// Object.entries(obj).forEach(([key, fn]: [any, any]) => {
	// 	out[key] = (value: any) => {
	// 		const output = fn(value);
	// 		console.log(fn.name, { input: value, output });
	// 		return output;
	// 	};
	// });
	// return out;
};

const defaultTimeTransform: IDateTimeTransformValue<number> = wrap({
	toDate: (value: number): Date => {
		const start = startOfDay(new Date());
		const offset = start.getTime() + value;
		return new Date(offset);
	},
	toValue: (date: Date): number => {
		const value = getTimeOffsetSinceStartOfDay(date);
		return value;
	},
});

export default defaultTimeTransform;
