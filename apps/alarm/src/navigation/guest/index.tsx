import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../../constants/Assets";
import useColorScheme from "../../hooks/useColorScheme";
import { SignInScreen } from "../../screens/auth/sign-in-email";
import { SignUpScreen } from "../../screens/auth/sign-up-email";
import { TabParamList, StackParamList } from "./schema";

const Stack = createNativeStackNavigator<StackParamList>();

export default function GuestNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

const BottomTab = createBottomTabNavigator<TabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="SignIn"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="SignIn"
				component={SignInScreen}
				options={{
					title: "Sign In",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="SignUp"
				component={SignUpScreen}
				options={{
					title: "Sign Up",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
