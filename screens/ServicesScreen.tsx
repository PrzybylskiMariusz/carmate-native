import { View, StyleSheet } from "react-native";

import { Typography } from "../components/Typography/Typography";

export const ServicesScreen = () => {
	return (
		<View style={styles.container}>
			<Typography variant="title">Services Screen</Typography>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
});
