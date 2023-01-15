import * as React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { NavigationHeaderButton } from "../../components/buttons/HeaderButton";
import FormTimePicker from "../../screens/form-screen/time-picker";
import { StackScreenProps } from "./schema";

export const makeFormStackOptions = (base: NativeStackNavigationOptions) => {
	return ({ navigation }: StackScreenProps) => ({
		headerRight: () => (
			<NavigationHeaderButton
				icon="plus-circle"
				onPress={() => {
					navigation.goBack();
				}}
			/>
		),
		...base,
	});
};

export const makeFormScreenComposer = (Stack: any) => {
	const TimePicker: React.FC<{ options: NativeStackNavigationOptions }> = props => {
		return (
			<Stack.Screen
				name="Time"
				component={FormTimePicker}
				options={makeFormStackOptions({
					title: "Set Time",
					...props.options,
				})}
			/>
		);
	};

	return { TimePicker };
};
