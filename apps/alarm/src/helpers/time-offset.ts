import startOfDay from "date-fns/startOfDay";

export const getTimeOffsetSinceStartOfDay = (date: Date) => {
	return date.getTime() - startOfDay(date).getTime();
};
