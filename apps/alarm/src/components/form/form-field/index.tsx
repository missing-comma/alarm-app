import React from "react";
import { StyleBuilder } from "../../../helpers/styled-builder";
import { useThemeColor } from "../../../hooks/use-theme-color";
import { Text, View } from "../../Themed";
import { HelperText } from "react-native-paper";

export interface IFormFieldProps {
	id: string;
	error?: string;
	children: React.ReactNode;
}

export type FormContentProps<Props extends {}> = Omit<
	IFormFieldProps & Props & { label?: string },
	"children" | "error"
>;

const Error: React.FC<{ children: string | undefined }> = ({ children }) => {
	return (
		<View style={styles.error.view}>
			{children && <Text style={styles.error.text}>{children}</Text>}
		</View>
	);
};

export const FormField = (props: IFormFieldProps) => {
	const color = useThemeColor({}, "error");

	return (
		<View style={styles.container}>
			<View style={!!props.error && styles.error.border(color)}>{props.children}</View>
			<HelperText type="error" visible={!!props.error}>
				{props.error}
			</HelperText>
		</View>
	);
};

const styles = StyleBuilder.create({
	container: { flexDirection: "column", marginBottom: 5 },
	error: {
		border: (color: string) => ({
			borderColor: color,
			borderWidth: 1,
			borderStyle: "solid",
			borderRadius: 5,
		}),
		view: {
			height: 30,
		},
		text: StyleBuilder.font.create(null, 14, "red", { paddingTop: 2 }),
	},
});
