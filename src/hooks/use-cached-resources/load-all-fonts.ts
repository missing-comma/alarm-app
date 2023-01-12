import { loadAsync, useFonts } from 'expo-font';

const ASSETS_PATH = '../../../assets/fonts/';

export const useLoadFonts = () => {
	const [fontsLoaded] = useFonts({
		'space-mono': require(`${ASSETS_PATH}/SpaceMono-Regular.ttf`),
	});

	return { fontsLoaded };
};
