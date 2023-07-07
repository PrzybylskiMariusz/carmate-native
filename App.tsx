import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { colors } from "./constants/colors";
import { Typography } from "./components/Typography/Typography";

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
			<Typography variant="heading" textStyle={styles.textStyles}>
				Carmate
			</Typography>
			<Typography variant="paragraph">
				All your vehicles in your pocket
			</Typography>
			<StatusBar style="auto" />
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
	textStyles: {
		fontSize: 56,
		lineHeight: 84,
		color: colors.primary500,
	},
});
