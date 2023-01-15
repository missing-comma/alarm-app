import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { ScreenView } from "../components/Screen";
import { View } from "../components/Themed";

export default function TabOneScreen({ navigation }: any) {
	return (
		<ScreenView>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</ScreenView>
	);
}

const styles = StyleSheet.create({
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
