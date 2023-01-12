import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useLoadFonts } from "./load-all-fonts";

SplashScreen.preventAutoHideAsync();

export default function useCachedResources() {
	const { fontsLoaded } = useLoadFonts();
	const loaded = fontsLoaded;

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	return loaded;
}
