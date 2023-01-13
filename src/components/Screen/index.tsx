import { ScrollViewProps } from "../../components/Themed";
import { ScreenViewContainer } from "./container";

export interface ScreenProps extends ScrollViewProps {
	children: React.ReactNode;
}

export const ScreenView = (props: ScreenProps) => {
	const { children, ...viewProps } = props;

	return <ScreenViewContainer {...viewProps}>{children}</ScreenViewContainer>;
};
