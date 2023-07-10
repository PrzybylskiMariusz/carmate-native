import { Text, StyleSheet, Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { ButtonProps } from "./Button.types";
import { colors } from "../../constants/colors";

export const Button = ({
	variant,
	buttonStyle,
	label,
	iconName,
	onPress,
}: ButtonProps) => {
	const buttonVariantStyle = getVariantStyle(variant);
	const textStyle = getTextStyle(variant);
	return (
		<Pressable
			style={[buttonStyles.rootContainer, buttonVariantStyle, buttonStyle]}
			onPress={onPress}>
			<Text style={[buttonStyles.rootText, textStyle]}>{label}</Text>
			{iconName && (
				<MaterialIcons
					name={iconName}
					size={16}
					color={
						variant === "primary"
							? colors.white
							: variant === "secondary"
							? colors.white
							: colors.primary500
					}
				/>
			)}
		</Pressable>
	);
};

const getVariantStyle = (variant: string) => {
	switch (variant) {
		case "primary":
			return buttonStyles.primary;
		case "secondary":
			return buttonStyles.secondary;
		case "tertiary":
			return buttonStyles.tertiary;
		case "ghost":
			return buttonStyles.ghost;
		case "textButton":
			return buttonStyles.textButton;
		default:
			return buttonStyles.rootContainer;
	}
};

const getTextStyle = (variant: string) => {
	switch (variant) {
		case "primary":
			return buttonStyles.whiteCapLabel;
		case "secondary":
			return buttonStyles.whiteCapLabel;
		case "tertiary":
			return buttonStyles.primCapLabel;
		case "ghost":
			return buttonStyles.primCapLabel;
		case "textButton":
			return buttonStyles.primLowLabel;
		default:
			return buttonStyles.primCapLabel;
	}
};

const buttonStyles = StyleSheet.create({
	rootContainer: {
		flexDirection: "row",
		gap: 10,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	primary: {
		backgroundColor: colors.primary500,
	},
	secondary: {
		backgroundColor: colors.secondary500,
	},
	tertiary: {
		backgroundColor: colors.tertiary500,
	},
	ghost: {
		backgroundColor: colors.white,
		borderColor: colors.primary500,
		borderWidth: 1,
	},
	textButton: {
		backgroundColor: "none",
	},
	rootText: {
		fontFamily: "medium",
		fontSize: 14,
		lineHeight: 24,
	},
	whiteCapLabel: {
		color: colors.white,
		textTransform: "uppercase",
	},
	primCapLabel: {
		color: colors.primary500,
		textTransform: "uppercase",
	},
	primLowLabel: {
		color: colors.primary500,
	},
});
