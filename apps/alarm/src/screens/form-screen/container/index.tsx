import React from "react";
import { StyleSheet } from "react-native";
import { Center } from "../../../components/layouts/Center";
import { ScreenView } from "../../../components/Screen";

export const FormFieldScreenContainer: React.FC<{ children: React.ReactNode }> = props => {
	return (
		<ScreenView>
			<Center>{props.children}</Center>
		</ScreenView>
	);
};
