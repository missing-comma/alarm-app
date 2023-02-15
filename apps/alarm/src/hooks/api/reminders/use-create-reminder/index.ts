import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
import { Reminder } from "../../../../schemas/reminders";
import { useAsyncCall } from "../../../utils/use-async-call";

type QueryableDate = {
	date: Date;
	weekday: number;
	month: number;
	/**
	 * MS since start of day
	 */
	time: number;
};

interface FirebaseReminder {
	readonly id: string;
	readonly type: Reminder.Type;
	readonly metadata: Reminder.Metadata;
	readonly weekdays: Reminder.Weekday[];
	readonly start: null;
	readonly end: null;
	readonly time: number;
	readonly name: string;
}

const mapReminder = (id: string, reminder: Omit<Reminder.Any, "id">): FirebaseReminder => {
	return {
		id,
		type: reminder.type,
		metadata: reminder.metadata,
		name: reminder.name,
		weekdays: reminder.weekdays,
		end: null,
		start: null,
		time: reminder.time,
	};
};

export const useCreateReminder = () => {
	const create = useAsyncCall(async (reminder: Omit<Reminder.Any, "id">) => {
		const firestore = getFirestore();
		const document = doc(collection(firestore, "reminders"));

		const data = mapReminder(document.id, reminder);

		await setDoc(document, data);
	}, []);
	return create;
};
