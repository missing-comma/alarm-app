import * as React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useThemeColor } from "../../hooks/use-theme-color";
import { Text } from "../Themed";
import { StyleBuilder } from "../../helpers/styled-builder";

export interface INavigationHeaderButtonProps {
	icon?: ConstructorParameters<typeof FontAwesome>[0]["name"];
	onPress(): void;
	children?: string;
}

export const NavigationHeaderButton: React.FC<INavigationHeaderButtonProps> = props => {
	const color = useThemeColor({}, "text");

	return (
		<Pressable
			onPress={props.onPress}
			style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]}
		>
			{props.icon && (
				<FontAwesome
					name={props.icon}
					size={25}
					color={color}
					style={{ marginRight: 15 }}
				/>
			)}
			{props.children && <Text style={styles.label}>{props.children}</Text>}
		</Pressable>
	);
};

const styles = StyleBuilder.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "#222",
	},
	label: StyleBuilder.font.create(null, 14, "white", {
		paddingHorizontal: 6,
		paddingVertical: 6,
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: "#222",
	}),
});
