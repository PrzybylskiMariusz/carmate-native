import { View, StyleSheet } from "react-native";

import { colors } from "../constants/colors";
import { Typography } from "../components/Typography/Typography";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";

export const WelcomeScreen = () => {
	return (
		<View style={styles.container}>
			<Container>
				<Typography variant="heading" textStyle={styles.textStyles}>
					.car
					<Typography variant="heading" textStyle={styles.textStylesSpan}>
						mate
					</Typography>
				</Typography>
				<Typography variant="paragraph">
					All your vehicles in your pocket
				</Typography>
			</Container>
			<View style={styles.buttonContainer}>
				<Button variant="primary" label="Primary Button" />
				<Button variant="ghost" label="Ghost Button" />
			</View>
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
	textStyles: {
		fontSize: 56,
		lineHeight: 84,
		color: colors.primary500,
	},
	textStylesSpan: {
		fontSize: 56,
		lineHeight: 84,
		color: colors.secondary500,
	},
	buttonContainer: {
		gap: 16,
		marginVertical: 16,
	},
});
