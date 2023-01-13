import { Formik } from "formik";
import { StyleBuilder } from "../../../../helpers/styled-builder";
import { Center } from "../../../../components/layouts/Center";
import { ScreenView } from "../../../../components/Screen";
import { Text, View } from "../../../../components/Themed";
import { SignInOrUpEmailProps } from "./types";
import { Input } from "../../../../components/form/input";
import * as yup from "yup";
import { Pressable } from "../../../../components/buttons/Button";

const validationSchema = yup.object().shape({
	email: yup.string().email("Please enter valid email").required("Email Address is Required"),
	password: yup
		.string()
		.min(6, ({ min }) => `Password must be at least ${min} characters`)
		.required("Password is required"),
});

export const SignInOrAny: React.FC<SignInOrUpEmailProps> = props => {
	return (
		<ScreenView>
			<Center>
				<Text style={styles.texts.title}>{props.title}</Text>
				<Text style={styles.texts.subtitle}>{props.subtitle}</Text>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					onSubmit={props.onSubmit}
					validationSchema={validationSchema}
				>
					{({ handleSubmit }) => (
						<>
							<Input id="email" label="Email" />
							<Input id="password" label="Password" />
							<View style={styles.footer}>
								<Pressable onPress={handleSubmit as any} loading={props.loading}>
									{props.button}
								</Pressable>
							</View>
						</>
					)}
				</Formik>
			</Center>
		</ScreenView>
	);
};

const styles = StyleBuilder.create({
	texts: {
		title: StyleBuilder.font.create(null, 24, "white", { fontWeight: "bold" }),
		subtitle: StyleBuilder.font.create(null, 16, "white", {
			marginBottom: 30,
		}),
	},
	footer: {},
});
