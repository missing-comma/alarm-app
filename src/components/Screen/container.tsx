import { StyleSheet } from "react-native";

import { ScrollView, ScrollViewProps, Text, View } from "../../components/Themed";

export const ScreenViewContainer = (props: ScrollViewProps) => {
	const { children, ...viewProps } = props;

	if (!props.scrollEnabled) {
		return (
			<View {...viewProps} style={[styles.container, viewProps.style]}>
				{children}
			</View>
		);
	}

	return (
		<ScrollView {...viewProps} style={[styles.container, viewProps.style]}>
			{children}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
		marginTop: 35,
	},
});
