import { ParamListBase, StackNavigationState, TypedNavigator } from "@react-navigation/native";
import {
	NativeStackNavigationEventMap,
	NativeStackNavigationOptions,
	NativeStackNavigatorProps,
} from "@react-navigation/native-stack/lib/typescript/src/types";

export type StackConstructor<StackParamList extends ParamListBase> = TypedNavigator<
	StackParamList,
	StackNavigationState<ParamListBase>,
	NativeStackNavigationOptions,
	NativeStackNavigationEventMap,
	({
		id,
		initialRouteName,
		children,
		screenListeners,
		screenOptions,
		...rest
	}: NativeStackNavigatorProps) => JSX.Element
>;
