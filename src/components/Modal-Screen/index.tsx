import { StyleSheet } from "react-native";
import { ScreenView, ScreenProps } from "../Screen";

export interface ModalScreenProps extends ScreenProps {
	children: React.ReactNode;
}

export const ModalScreen = (props: ModalScreenProps) => {
	const { children, ...viewProps } = props;

	return (
		<ScreenView {...viewProps} style={[props.style, styles.container]}>
			{children}
		</ScreenView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 35,
	},
});
