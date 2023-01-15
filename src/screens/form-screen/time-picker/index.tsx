import DateTimePicker from "@react-native-community/datetimepicker";
import { Text } from "../../../components/Themed";
import { FormFieldScreenContainer } from "../container";

export default function FormTimePicker({ navigation }: any) {
	return (
		<FormFieldScreenContainer>
			<DateTimePicker
				testID="dateTimePicker"
				value={new Date()}
				mode={"time"}
				is24Hour={true}
				display="default"
				onChange={value => {}}
			/>
		</FormFieldScreenContainer>
	);
}
