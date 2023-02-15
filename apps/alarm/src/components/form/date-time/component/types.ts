import { FormContentProps } from "../../form-field";

import {
	AndroidNativeProps,
	IOSNativeProps,
	WindowsNativeProps,
} from "@react-native-community/datetimepicker/src";
import { Merge } from "../../../../helpers/types/merge";

export type DefaulltDateTimeProps = IOSNativeProps | AndroidNativeProps | WindowsNativeProps;

export type IDateTimeTransformValue<V> = {
	toDate(value: V): Date;
	toValue(date: Date): V;
};

type NewProps<V = Date> = {
	readonly label?: string;
	readonly mode: "date" | "time";
	readonly display: "spinner" | "calendar";
	readonly transformValue?: IDateTimeTransformValue<V>;
};

type RemovedProps = "value";

type PartialIDateTimeInputPropsMissingNewAndOverwrittenProps = Omit<
	FormContentProps<DefaulltDateTimeProps>,
	RemovedProps
>;

export type IDateTimeInputComponentProps<V = Date> = Merge.Right<
	PartialIDateTimeInputPropsMissingNewAndOverwrittenProps,
	NewProps<V>
>;

export type IDateTimeInputComponentFC = {
	<V>(props: IDateTimeInputComponentProps<V>): JSX.Element;
	defaultProps?: IDateTimeInputComponentProps<unknown>;
};
