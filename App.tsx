import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { WelcomeScreen } from "./screens/WelcomeScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		regular: require("./assets/fonts/Roboto-Regular.ttf"),
		medium: require("./assets/fonts/Roboto-Medium.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<StatusBar style="auto" />
			<WelcomeScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
