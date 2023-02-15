import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/use-cached-resources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	}
	return (
		<SafeAreaProvider>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : undefined}
				style={{ flex: 1 }}
				contentContainerStyle={{ flexGrow: 1 }}
			>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</KeyboardAvoidingView>
		</SafeAreaProvider>
	);
}
