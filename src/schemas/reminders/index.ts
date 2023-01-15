export declare namespace Reminder {
	export interface Metadata {
		readonly startNull: boolean;
		readonly endNull: boolean;
		readonly utc: boolean;
	}
	export interface Common {
		readonly id: string;
		readonly name: string;
		/**
		 * Number of milliseconds since start of Day
		 */
		readonly time: number;

		/**
		 * Date where user should start to be reminded
		 */
		readonly start: Date | null;

		/**
		 * Date where user should stop being reminded
		 */
		readonly end: Date | null;

		/**
		 * Unique exception dates where the user should not be reminded in the future
		 */
		readonly exceptions: Exception[];

		readonly metadata: Metadata;
	}

	export interface Exception {
		readonly id: string;
		readonly name: string | null;
		readonly date: string;
	}

	export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

	export interface Daily extends Common {
		readonly type: "daily";
		readonly weekdays: any;
	}

	export interface Weekly extends Common {
		readonly type: "weekly";
		readonly weekdays: Weekday[];
	}

	export interface Monthly extends Common {
		readonly type: "monthly";
		readonly weekdays: any;
	}

	export interface Unique extends Common {
		readonly type: "unique";
		readonly weekdays: any;
	}

	export type Any = Reminder.Common & {
		readonly type: Type;
		readonly weekdays: any;
	};

	export type Type =
		| [Reminder.Daily, Reminder.Weekly, Reminder.Monthly, Reminder.Unique][number]["type"]
		| "any";
}

export type Reminder<T extends Reminder.Type = "any"> = T extends "any"
	? Reminder.Any
	: Extract<Reminder.Any, { type: T }>;
