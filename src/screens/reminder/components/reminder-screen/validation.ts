import * as yup from "yup";
import { REMINDER_TYPES, WEEKDAY } from "../../../../constants/Reminders";

const ONE_DAY_MS = 86400000;

export default yup.object().shape({
	type: yup.mixed().required().oneOf(Array.from(REMINDER_TYPES)),
	weekdays: yup.mixed().when("type", (type, schema) => {
		if (type === "weekly") {
			return yup
				.array()
				.required()
				.of(yup.mixed().required().oneOf(Array.from(WEEKDAY)));
		}
		return schema;
	}),
	name: yup.string().required(),
	time: yup.number().required().min(0).max(ONE_DAY_MS),
	// start: yup.mixed().required(),
	utc: yup.bool(),
	// end: yup
	// 	.date()
	// 	.when(
	// 		"start",
	// 		(startDate, schema) =>
	// 			startDate && schema.min(startDate, "The end time must be after the start time")
	// 	),
	// exceptions: null
});
