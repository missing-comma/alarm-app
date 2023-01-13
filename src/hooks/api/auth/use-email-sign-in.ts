import { getAuth, signInWithEmailAndPassword, setPersistence } from "firebase/auth";
import { useAsyncCall } from "../../utils/use-async-call";

export interface IEmailSignUpSchema {
	readonly email: string;
	readonly password: string;
}

export const handleEmailSignIn = async (payload: IEmailSignUpSchema): Promise<void> => {
	// await setPersistence(getAuth(), {
	// 	type: "LOCAL",
	// });
	await signInWithEmailAndPassword(getAuth(), payload.email, payload.password);
};

export const useEmailSignIn = () => {
	return useAsyncCall(
		handleEmailSignIn,
		{
			initial: false,
		},
		[]
	);
};
