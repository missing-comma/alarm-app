import React from "react";
import { StyleBuilder } from "../../../helpers/styled-builder";
import { Text } from "../../Themed";

export interface IFormFieldLabelProps {
	error?: boolean;
	children?: React.ReactNode;
}

export const FormFieldLabel = (props: IFormFieldLabelProps) => {
	if (!props.children) return null;
	return <Text style={styles.text}>{props.children}</Text>;
};

const styles = {
	text: StyleBuilder.font.create(null, 16, "white", { marginBottom: 5 }),
};
