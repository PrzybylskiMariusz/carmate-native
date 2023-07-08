const BUTTON_VARIANT = {
	primary: "primary",
	secondary: "secondary",
	tertiary: "tertiary",
	ghost: "ghost",
	textButton: "textButton",
} as const;

type ObjectValues<T> = T[keyof T];

export type ButtonProps = {
	variant: ObjectValues<typeof BUTTON_VARIANT>;
	buttonStyle?: {};
	label: string;
	onPress?: () => void;
};
