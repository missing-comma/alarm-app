import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackConstructor } from "../../helpers/types/navigation";

export type StackType = StackConstructor<StackParamList>;

export type StackParamList = {
	Root: NavigatorScreenParams<TabParamList> | undefined;
};

export type StackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<
	StackParamList,
	Screen
>;

export type TabParamList = {
	SignIn: undefined;
	SignUp: undefined;
};

export type TabScreenProps<Screen extends keyof TabParamList> = CompositeScreenProps<
	BottomTabScreenProps<TabParamList, Screen>,
	NativeStackScreenProps<StackParamList>
>;
