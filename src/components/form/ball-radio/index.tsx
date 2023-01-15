import { FormContentProps } from "../form-field";
import { useField } from "formik";
import { FormFieldLabel } from "../components/label";
import { Merge } from "../../../helpers/types/merge";
import { Text, View } from "../../Themed";
import { useMemo } from "react";
import { StyleBuilder } from "../../../helpers/styled-builder";
import { Pressable } from "react-native";

type BallButton =
	| string
	| number
	| {
			value: string | number;
			label?: string;
	  };

export type IBallRadioFormFieldProps = Merge.Right<
	Omit<FormContentProps<{}>, "value" | "onValueChange">,
	{
		buttons: readonly BallButton[];
		numeric?: boolean;
		multiSelect?: boolean;
	}
>;

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const toOneOrMany = <V extends any, R>(value: V | V[], map: (value: V) => R): R | R[] => {
	if (Array.isArray(value)) return value.map(map);
	return map(value);
};

export const BallRadioFormField: React.FC<IBallRadioFormFieldProps> = props => {
	const { id, label, buttons: rawButtons } = props;
	const [{ onChange, onBlur, ...field }, meta, helper] = useField(id);

	const buttons = useMemo(() => {
		const btns = rawButtons.map(button => {
			if (typeof button === "string" || typeof button === "number") {
				return {
					value: button as string,
				};
			}
			return { ...button, value: button.value as string };
		});

		btns.forEach(btn => {
			if (!btn.label && typeof btn.value === "string") {
				btn.label = capitalize(btn.value);
			}
		});
		return btns;
	}, [rawButtons]);

	const onOptionPress = (nextRaw: string | string[]) => {
		const next = props.numeric ? toOneOrMany(nextRaw, Number) : nextRaw;
		helper.setValue(next, true);
	};

	return (
		<View style={styles.container}>
			{props.label && <FormFieldLabel error={!!meta.error}>{label}</FormFieldLabel>}
			<View style={styles.content}>
				<>
					{buttons.map((button, index) => {
						const isSelected = (() => {
							if (props.multiSelect && Array.isArray(field.value)) {
								return field.value.indexOf(button.value) >= 0;
							}
							return field.value === button.value;
						})();

						return (
							<Pressable
								key={`${button.label}${index}`}
								onPress={() => {
									if (props.multiSelect) {
										if (Array.isArray(field.value)) {
											const set = new Set<string>(field.value);
											if (set.has(button.value)) {
												set.delete(button.value);
											} else {
												set.add(button.value);
											}
											onOptionPress(Array.from(set));
										} else {
											onOptionPress([button.value]);
										}
									} else {
										onOptionPress(button.value);
									}
								}}
							>
								<View
									style={[
										styles.option.container,
										isSelected
											? styles.option.selected
											: styles.option.notSelected,
									]}
								>
									<Text
										style={[
											isSelected
												? styles.option.selected
												: styles.option.notSelected,
										]}
									>
										{button.label}
									</Text>
								</View>
							</Pressable>
						);
					})}
				</>
			</View>
		</View>
	);
};

const styles = StyleBuilder.create({
	container: {
		marginBottom: 12,
	},
	content: {
		flexDirection: "row",
		flexGrow: 1,
		justifyContent: "space-around",
	},
	option: {
		container: {
			padding: 8,
			borderRadius: 99,
			aspectRatio: 1,
			alignItems: "center",
		},
		selected: {
			backgroundColor: "cyan",
			color: "black",
		},
		notSelected: {
			backgroundColor: "#333",
			color: "black",
		},
	},
});
