import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { ModalScreen } from "../../components/Modal-Screen";
import { useCreateReminder } from "../../hooks/api/reminders/use-create-reminder";
import { Reminder } from "alarm-core";
import { ReminderValuesScreen } from "../reminder/components/reminder-screen";

export default function AddReminderScreen() {
	const createReminder = useCreateReminder();

	return (
		<ModalScreen scrollEnabled={false}>
			<ReminderValuesScreen
				loading={false}
				initialValues={undefined}
				onSubmit={({ startNull, endNull, utc, ...values }) => {
					console.log("submitting");
					const metadata: Reminder.Metadata = {
						endNull,
						startNull,
						utc,
					};
					createReminder({
						...values,
						metadata,
						exceptions: [],
					});
				}}
			/>
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</ModalScreen>
	);
}

const styles = StyleSheet.create({});
