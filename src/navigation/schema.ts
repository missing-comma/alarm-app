import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as AuthNavigator from "./auth/schema";
import * as GuestNavigator from "./guest/schema";

export type RootStackParamList = AuthNavigator.StackParamList & GuestNavigator.StackParamList;
export type TabParamList = AuthNavigator.TabParamList & GuestNavigator.TabParamList;

export type StackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>;
