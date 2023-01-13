import { TextInputProps, TextInput } from "react-native-paper";
import { FormField, FormContentProps } from "../form-field";

import { useField } from "formik";

export type IInputProps = Omit<FormContentProps<TextInputProps>, "theme">;

export const Input = (props: IInputProps) => {
	const { id, ...inputProps } = props;
	const [{ onChange, onBlur, ...field }, meta, helper] = useField(id);

	return (
		<FormField id={id} error={meta.error}>
			<TextInput
				onChangeText={value => helper.setValue(value)}
				onBlur={() => helper.setTouched(true, true)}
				{...field}
				{...inputProps}
			/>
		</FormField>
	);
};
