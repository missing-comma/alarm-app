import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import LinkingConfiguration from "./LinkingConfiguration";

import AuthNavigator from "./auth";
import GuestNavigator from "./guest";
import { RootStackParamList } from "./schema";
import { useAuthContext } from "../contexts/auth";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	const auth = useAuthContext();

	if (!auth.isLoggedIn) {
		return <GuestNavigator />;
	}
	return <AuthNavigator />;
}
