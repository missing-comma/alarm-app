/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackConstructor } from "../../helpers/types/navigation";
import { StackParamList as FormStackParamList } from "../form/schema";

export type StackType = StackConstructor<StackParamList>;

export type StackParamList = {
	Root: NavigatorScreenParams<TabParamList> | undefined;
	Modal: undefined;
	AddReminder: undefined;
	EditReminder: undefined;
	NotFound: undefined;
} & Pick<FormStackParamList, "Time">;

export type StackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<
	StackParamList,
	Screen
>;

export type TabParamList = {
	TabOne: undefined;
	TabTwo: undefined;
};

export type TabScreenProps<Screen extends keyof TabParamList> = CompositeScreenProps<
	BottomTabScreenProps<TabParamList, Screen>,
	NativeStackScreenProps<StackParamList>
>;
