import { useField } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FormField } from "../../form-field";
import { IDateTimeInputComponentProps as IProps, IDateTimeInputComponentFC } from "./types";
import { useMutatedValue } from "../../../../hooks/utils/use-mutated-value";
import { useDateTimeValueTransform } from "./hooks/use-transform";
import { FormFieldLabel } from "../../components/label";

export const DateInputComponent: IDateTimeInputComponentFC = <V extends any>(props: IProps<V>) => {
	const { id, label, ...inputProps } = props;
	const [{ onChange, onBlur, ...field }, meta, helper] = useField<V>(id);

	const transform = useDateTimeValueTransform(props.transformValue);

	const value = field.value || new Date();

	const valueAsDate = useMutatedValue([value], transform.toDate);

	return (
		<FormField id={id} error={meta.error}>
			<FormFieldLabel error={!!meta.error}>{label}</FormFieldLabel>
			<DateTimePicker
				{...field}
				{...inputProps}
				onChange={(_, date) => {
					if (date) {
						const nextValue = transform.toValue(date);
						helper.setValue(nextValue, true);
					}
				}}
				value={valueAsDate}
			/>
		</FormField>
	);
};

export * from "./types";
