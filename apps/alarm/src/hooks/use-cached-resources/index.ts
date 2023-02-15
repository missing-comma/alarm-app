import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/auth";
import { useLoadFonts } from "./load-all-fonts";

SplashScreen.preventAutoHideAsync();

export default function useCachedResources() {
	const { fontsLoaded } = useLoadFonts();
	const { isLoggedIn } = useAuthContext();
	const loaded = fontsLoaded && isLoggedIn !== null;

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	return loaded;
}
