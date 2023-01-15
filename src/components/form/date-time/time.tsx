import defaultTimeTransform from "./helpers/default-time-transform";
import { DateInputComponent } from "./component";
import { IDateTimeInputProps } from "./types";

export const TimeInput: React.FC<TimeInput.Props> = (props: TimeInput.Props) => {
	return <DateInputComponent<number> mode="time" display="spinner" {...props} />;
};

TimeInput.defaultProps = {
	transformValue: defaultTimeTransform,
};

export declare namespace TimeInput {
	export type Props = IDateTimeInputProps<number, {}>;
}
