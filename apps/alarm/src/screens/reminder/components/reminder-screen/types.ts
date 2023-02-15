import { Reminder } from "alarm-core";

export interface ReminderValuesScreenProps {
	initialValues?: Reminder;
	onSubmit(values: FormValues): any;
	loading: boolean;
}

export interface FormValues {
	type: Reminder.Type;
	weekdays: Reminder.Weekday[];
	name: string;
	time: number;
	start: Date | null;
	end: Date | null;
	utc: boolean;
	startNull: boolean;
	endNull: boolean;
}
