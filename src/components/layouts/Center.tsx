import { ViewProps, View } from "../../components/Themed";
import { StyleBuilder } from "../../helpers/styled-builder";

export interface ScreenProps extends ViewProps {
	children: React.ReactNode;
}

export const Center = (props: ScreenProps) => {
	const { children, ...viewProps } = props;
	return (
		<View {...viewProps} style={[style, props.style]}>
			{children}
		</View>
	);
};

const style = StyleBuilder.create({
	justifyContent: "center",
	alignItems: "stretch",
	textAlign: "center",
});
