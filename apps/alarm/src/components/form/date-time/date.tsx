import { DateInputComponent } from "./component";
import { IDateTimeInputProps } from "./types";

export const DateInput: DateInput.FC = <V extends any>(props: DateInput.Props<V>) => {
	return <DateInputComponent mode="date" display={"calendar"} {...props} />;
};

export declare namespace DateInput {
	export type Props<V> = IDateTimeInputProps<V, {}>;

	export type FC = {
		<V extends any>(props: DateInput.Props<V>): React.ReactElement;
		defaultProps?: DateInput.Props<unknown>;
	};
}
