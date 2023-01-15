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
		<ScrollView
			{...viewProps}
			contentContainerStyle={[styles.container, viewProps.contentContainerStyle]}
		>
			{children}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "stretch",
		textAlign: "center",
		justifyContent: "flex-start",
		paddingHorizontal: 25,
		paddingBottom: 15,
	},
});
