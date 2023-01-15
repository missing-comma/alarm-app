/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";
import { NavigationHeaderButton } from "../../components/buttons/HeaderButton";

import Colors from "../../constants/Assets";
import useColorScheme from "../../hooks/useColorScheme";
import AddReminderScreen from "../../screens/add-reminder";
import NotFoundScreen from "../../screens/NotFoundScreen";
import TabOneScreen from "../../screens/TabOneScreen";
import TabTwoScreen from "../../screens/TabTwoScreen";
import { TabParamList, TabScreenProps, StackParamList } from "./schema";

const Stack = createNativeStackNavigator<StackParamList>();

export default function AuthenticatedNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen
					name="AddReminder"
					component={AddReminderScreen}
					options={({ navigation }) => ({
						title: "Add Reminder",
						headerLeft: () => (
							<NavigationHeaderButton
								onPress={() => {
									navigation.goBack();
								}}
							>
								{"Cancel"}
							</NavigationHeaderButton>
						),
					})}
				/>
				<Stack.Screen
					name="EditReminder"
					component={AddReminderScreen}
					options={{ title: "Edit Reminder" }}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
}

const BottomTab = createBottomTabNavigator<TabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={({ navigation }: TabScreenProps<"TabOne">) => ({
					title: "TabOne",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate("AddReminder")}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name="plus-circle"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={{
					title: "Tab Two",
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
