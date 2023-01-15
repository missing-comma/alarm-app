import { FormContentProps } from "../form-field";
import { useField } from "formik";
import { SegmentedButtons, SegmentedButtonsProps } from "react-native-paper";
import { FormFieldLabel } from "../components/label";
import { Merge } from "../../../helpers/types/merge";
import { Text, View } from "../../Themed";
import { useMemo } from "react";
import { StyleBuilder } from "../../../helpers/styled-builder";
import { Pressable } from "react-native";

type SegmentButton =
	| string
	| number
	| Merge.Right<
			SegmentedButtonsProps["buttons"][number],
			{
				value: string | number;
				label?: string;
			}
	  >;

export type ISegmentRadioFormFieldProps = Merge.Right<
	Omit<FormContentProps<SegmentedButtonsProps>, "value" | "onValueChange">,
	{
		buttons: readonly SegmentButton[];
		numeric?: boolean;
	}
>;

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const toOneOrMany = <V extends any, R>(value: V | V[], map: (value: V) => R): R | R[] => {
	if (Array.isArray(value)) return value.map(map);
	return map(value);
};

export const SegmentRadioFormField: React.FC<ISegmentRadioFormFieldProps> = props => {
	const { id, label, buttons: rawButtons, ...segmentProps } = props;
	const [{ onChange, onBlur, ...field }, meta, helper] = useField(id);

	const buttons = useMemo(() => {
		const btns = rawButtons.map(button => {
			if (typeof button === "string" || typeof button === "number") {
				return {
					value: button as string,
				};
			}
			return { ...button, value: button.value as string };
		});

		btns.forEach(btn => {
			if (!btn.label && typeof btn.value === "string") {
				btn.label = capitalize(btn.value);
			}
			btn.style = [btn.style];
		});
		return btns;
	}, [rawButtons]);

	const onOptionPress = (nextRaw: string | string[]) => {
		const next = props.numeric ? toOneOrMany(nextRaw, Number) : nextRaw;
		helper.setValue(next, true);
	};

	return (
		<View style={styles.container}>
			{props.label && <FormFieldLabel error={!!meta.error}>{props.label}</FormFieldLabel>}
			<SegmentedButtons
				onValueChange={(nextRaw: string) => {
					onOptionPress(nextRaw);
				}}
				{...field}
				{...segmentProps}
				buttons={buttons}
				multiSelect={segmentProps.multiSelect as false}
			/>
		</View>
	);
};

const styles = StyleBuilder.create({
	container: {
		marginBottom: 12,
	},
});
