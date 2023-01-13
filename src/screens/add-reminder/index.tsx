import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { ModalScreen } from "../../components/Modal-Screen";
import { ScreenView } from "../../components/Screen";
import { Text, View } from "../../components/Themed";

export default function AddReminderScreen() {
	return (
		<ModalScreen>
			<EditScreenInfo path="/screens/ModalScreen.tsx" />
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</ModalScreen>
	);
}

const styles = StyleSheet.create({});
