import { StyleSheet, View } from "react-native";
import { PropsWithChildren } from "react";
import { colors } from "../../constants/colors";
import { ContainerProps } from "./Container.types";

export const Container = ({
	children,
	containerStyle,
}: PropsWithChildren<ContainerProps>) => {
	return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 4,
		elevation: 12,
		shadowColor: "black",
		shadowOpacity: 0.12,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 0 },
		backgroundColor: colors.white,
	},
});
