import { useMemo } from "react";
import { getTimeOffsetSinceStartOfDay } from "../../../../helpers/time-offset";
import { Merge } from "../../../../helpers/types/merge";
import { Pick } from "../../../../helpers/types/pick";
import { Reminder } from "alarm-core";
import { FormValues, ReminderValuesScreenProps } from "./types";

type DefaultValuesAsIs = Merge.Right<
	Pick.OfType<Reminder.Any, FormValues>,
	{
		weekdays: Reminder.Weekday[];
	}
>;

export const useReminderValuesScreenInitialValues = (props: ReminderValuesScreenProps) => {
	return useMemo((): FormValues => {
		const { initialValues } = props;

		const now = new Date();

		console.log({ now });

		const defaultValuesAsIs: DefaultValuesAsIs = {
			time: getTimeOffsetSinceStartOfDay(now),
			type: "unique",
			weekdays: [new Date().getDay() as Reminder.Weekday],
			name: "",
			start: null,
			end: null,
		};

		const defaultValues: FormValues = {
			...defaultValuesAsIs,
			utc: initialValues?.metadata?.utc ?? false,
			startNull: initialValues?.metadata?.startNull ?? true,
			endNull: initialValues?.metadata?.endNull ?? true,
		};

		if (!initialValues) return defaultValues;

		const keys = Object.keys(defaultValues) as Array<keyof DefaultValuesAsIs>;

		keys.forEach(key => {
			if (!props.initialValues) return;
			if (key in initialValues) {
				Object.assign(defaultValues, { [key]: initialValues[key] });
			}
		});
		return defaultValues;
	}, []);
};
