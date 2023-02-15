import { Button, ButtonProps } from "react-native-paper";
import { Text, useThemeColor } from "../Themed";

export interface IPressableProps extends Omit<ButtonProps, "theme"> {}

export const Pressable: React.FC<IPressableProps> = props => {
	const style = useThemeColor({}, "button");

	return (
		<Button {...props} style={[{ backgroundColor: style.bg }, props.style]}>
			<Text style={{ color: style.fg, fontSize: 16 }}>{props.children}</Text>
		</Button>
	);
};
