import { Text, StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
import { TypographyProps } from "./Typography.types";

export const Typography = ({
	variant,
	textStyle,
	children,
}: React.PropsWithChildren<TypographyProps>) => {
	const variantStyle = getVariantStyle(variant);

	return <Text style={[variantStyle, textStyle]}>{children}</Text>;
};

const getVariantStyle = (variant: string) => {
	switch (variant) {
		case "heading":
			return textStyles.heading;
		case "title":
			return textStyles.title;
		case "subtitle":
			return textStyles.subtitle;
		case "paragraph":
			return textStyles.paragraph;
		case "nameBold":
			return textStyles.nameBold;
		case "nameRegular":
			return textStyles.nameRegular;
		case "caption":
			return textStyles.caption;
		case "helpText":
			return textStyles.helpText;
		default:
			return textStyles.paragraph;
	}
};

const textStyles = StyleSheet.create({
	heading: {
		fontFamily: "medium",
		fontSize: 24,
		lineHeight: 36,
	},
	title: {
		fontFamily: "medium",
		fontSize: 20,
		lineHeight: 30,
		color: colors.primary500,
	},
	subtitle: {
		fontFamily: "medium",
		fontSize: 18,
		lineHeight: 27,
	},
	paragraph: {
		fontFamily: "regular",
		fontSize: 16,
		lineHeight: 24,
		color: colors.accent500,
	},
	nameBold: {
		fontFamily: "medium",
		fontSize: 14,
		lineHeight: 21,
	},
	nameRegular: {
		fontFamily: "regular",
		fontSize: 14,
		lineHeight: 21,
	},
	caption: {
		fontFamily: "regular",
		fontSize: 12,
		lineHeight: 18,
		color: colors.gray500,
	},
	helpText: {
		fontFamily: "regular",
		fontSize: 10,
		lineHeight: 15,
	},
});
