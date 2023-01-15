import { Merge } from "../../../helpers/types/merge";
import { IDateTimeInputComponentProps as ContainerProps } from "./component";

export type IDateTimeInputProps<V, NewProps> = Merge.Right<
	Omit<ContainerProps<V>, "mode" | "display">,
	NewProps
>;
