import { Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const TYPOGRAPHY_PROPS = {
	heading: "heading",
	title: "title",
	subtitle: "subtitle",
	paragraph: "paragraph",
	nameBold: "nameBold",
	nameRegular: "nameRegular",
	caption: "caption",
	helpText: "helpText",
} as const;

type ObjectValues<T> = T[keyof T];

type TypographyProps = {
	variant: ObjectValues<typeof TYPOGRAPHY_PROPS>;
	textStyle?: {};
};

export const Typography = ({
	variant,
	textStyle,
	children,
}: React.PropsWithChildren<TypographyProps>) => {
	{
		switch (variant) {
			case "heading":
				return <Text style={[textStyles.heading, textStyle]}>{children}</Text>;
			case "title":
				return <Text style={[textStyles.title, textStyle]}>{children}</Text>;
			case "subtitle":
				return <Text style={[textStyles.subtitle, textStyle]}>{children}</Text>;
			case "paragraph":
				return (
					<Text style={[textStyles.paragraph, textStyle]}>{children}</Text>
				);
			case "nameBold":
				return <Text style={[textStyles.nameBold, textStyle]}>{children}</Text>;
			case "nameRegular":
				return (
					<Text style={[textStyles.nameRegular, textStyle]}>{children}</Text>
				);
			case "caption":
				return <Text style={[textStyles.caption, textStyle]}>{children}</Text>;
			case "helpText":
				return <Text style={[textStyles.helpText, textStyle]}>{children}</Text>;
			default:
				return <Text>{children}</Text>;
		}
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
