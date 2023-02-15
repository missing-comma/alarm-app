import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackConstructor } from "../../helpers/types/navigation";

export type StackType = StackConstructor<StackParamList>;

export type StackFormParamList<V> = {
	value: V;
	error: string | undefined;
	cancel(): void;
	onChange(value: V): void;
};

export type StackParamList = {
	Time: StackFormParamList<Date>;
	Date: StackFormParamList<Date>;
	Text: StackFormParamList<string>;
};

export type StackScreenProps<Screen extends keyof StackParamList = keyof StackParamList> =
	NativeStackScreenProps<StackParamList, Screen>;
