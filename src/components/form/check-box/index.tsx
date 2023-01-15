import { FormContentProps } from "../form-field";
import { useField } from "formik";
import { StyleSheet } from "react-native";
import { FormFieldLabel } from "../components/label";
import { Merge } from "../../../helpers/types/merge";
import { View } from "../../Themed";
import { useThemeColor } from "../../../hooks/use-theme-color";
import { FontAwesome } from "@expo/vector-icons";

export type ICheckboxProps = Merge.Right<
	Omit<FormContentProps<{}>, "status" | "onPress" | "theme">,
	{}
>;

export const CheckBoxFormField: React.FC<ICheckboxProps> = props => {
	const { id, label } = props;
	const [{ onChange, onBlur, ...field }, meta, helper] = useField(id);

	const color = useThemeColor({}, "button");
	return (
		<View style={styles.container}>
			{props.label && <FormFieldLabel error={!!meta.error}>{props.label}</FormFieldLabel>}
			<FontAwesome
				style={styles.icon}
				color={field.value ? "cyan" : color.fg}
				size={30}
				name={field.value ? "check-square-o" : "square"}
				onPress={() => helper.setValue(!field.value, true)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 12,
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		marginLeft: 20,
	},
	content: {},
});
