import { Formik } from "formik";
import validationSchema from "./validation";
import { StyleBuilder } from "../../../../helpers/styled-builder";
import { ScreenView } from "../../../../components/Screen";
import { Input } from "../../../../components/form/input";
import { useReminderValuesScreenInitialValues as useInitialValues } from "./use-initial-values";
import { ReminderValuesScreenProps } from "./types";
import { DateInput, TimeInput } from "../../../../components/form/date-time";
import { REMINDER_TYPES, WEEKDAY } from "../../../../constants/Reminders";
import { SegmentRadioFormField } from "../../../../components/form/segment-radio";
import { Pressable } from "../../../../components/buttons/Button";
import { useEffect } from "react";
import { ScrollView, View } from "../../../../components/Themed";
import { CheckBoxFormField } from "../../../../components/form/check-box";
import { BallRadioFormField } from "../../../../components/form/ball-radio";

const reminderTypesOptions = REMINDER_TYPES.map(type => {
	return {
		value: type,
		label: type.charAt(0).toUpperCase() + type.slice(1),
	};
});

const Weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label, value) => ({
	value,
	label: label.charAt(0),
}));

const ChangeEffect = <Args extends any[]>(props: { when: Args; do: () => any }) => {
	useEffect(() => {
		props.do();
	}, props.when);
	return null;
};

export const ReminderValuesScreen = (props: ReminderValuesScreenProps) => {
	const initialValues = useInitialValues(props);

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={props.onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit, values, errors, handleChange, setFieldValue }) => {
				console.log({ values, errors });
				return (
					<View style={styles.container}>
						<ScrollView {...styles.scroll}>
							<ChangeEffect
								when={[values.start]}
								do={() => {
									setFieldValue("end", null);
									setFieldValue("startNull", false);
								}}
							/>
							<ChangeEffect
								when={[values.end]}
								do={() => {
									setFieldValue("endNull", false);
								}}
							/>
							<Input id="name" label="Name" />
							<TimeInput id="time" />
							<SegmentRadioFormField
								id="type"
								label="Frequency"
								buttons={REMINDER_TYPES}
							/>
							{values.type === "weekly" && (
								<BallRadioFormField
									id="weekday"
									label="Weekdays"
									buttons={Weekdays}
									numeric
									multiSelect
								/>
							)}
							{/* <DateInput id="start" label={"Start"} />
							<DateInput
								id="end"
								label="Until"
								minimumDate={values.start || undefined}
							/> */}
							<CheckBoxFormField id="utc" label="UTC" />
						</ScrollView>
						<View style={styles.footer}>
							<Pressable onPress={handleSubmit as any} loading={props.loading}>
								{"Add Reminder"}
							</Pressable>
						</View>
					</View>
				);
			}}
		</Formik>
	);
};

const styles = StyleBuilder.create({
	container: {
		flex: 1,
	},
	scroll: {
		style: {
			flexGrow: 1,
		},
		contentContainerStyle: {},
	},
	texts: {
		title: StyleBuilder.font.create(null, 24, "white", { fontWeight: "bold" }),
		subtitle: StyleBuilder.font.create(null, 16, "white", {
			marginBottom: 30,
		}),
	},
	footer: {
		marginTop: 15,
	},
});
