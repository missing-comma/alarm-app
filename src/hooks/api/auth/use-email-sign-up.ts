import axios from "axios";
import { getAuth, signInWithEmailAndPassword, setPersistence } from "firebase/auth";
import { ENDPOINTS } from "../../../constants/Endpoints";
import { User } from "../../../schemas/users";
import { useAsyncCall } from "../../utils/use-async-call";

export interface IEmailSignUpSchema {
	readonly email: string;
	readonly password: string;
}

export const useEmailSignUp = () => {
	return useAsyncCall(
		async (payload: IEmailSignUpSchema): Promise<User> => {
			const response = await axios.post(`${ENDPOINTS.auth}/auth__emailSignUp`, payload);

			const user: User = response.data;

			await setPersistence(getAuth(), {
				type: "LOCAL",
			});
			await signInWithEmailAndPassword(getAuth(), payload.email, payload.password);

			return user;
		},
		{
			initial: false,
		},
		[]
	);
};
