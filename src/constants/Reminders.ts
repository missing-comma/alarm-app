import { Reminder } from "../schemas/reminders";

export const WEEKDAY = [0, 1, 2, 3, 4, 5, 6, 7] as const;
export const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

export const REMINDER_TYPES: ReadonlyArray<Reminder.Type> = [
	"unique",
	"daily",
	"weekly",
	"monthly",
];
