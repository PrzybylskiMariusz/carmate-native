const TYPOGRAPHY_VARIANT = {
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

export type TypographyProps = {
	variant: ObjectValues<typeof TYPOGRAPHY_VARIANT>;
	textStyle?: {};
};
