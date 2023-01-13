export declare namespace Reminder {
	export interface Common {
		readonly id: string;
		readonly name: string;
		readonly start: Date | null;
		readonly end: Date | null;
		readonly exceptions: Exception[];
	}

	export interface Exception {
		readonly id: string;
		readonly name: string | null;
		readonly date: string;
	}

	export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

	export interface Daily extends Common {
		readonly type: "daily";
		readonly weekday: Weekday;
	}

	export interface Weekly extends Common {
		readonly type: "weekly";
	}

	export interface Monthly extends Common {
		readonly type: "monthly";
	}

	export interface Unique extends Common {
		readonly type: "unique";
	}

	export type Any = Reminder.Common &
		[Reminder.Daily, Reminder.Weekly, Reminder.Monthly, Reminder.Unique][number];

	export type Type = Any["type"];
}

export type Reminder<T extends Reminder.Type = Reminder.Type> = Extract<Reminder.Any, { type: T }>;
