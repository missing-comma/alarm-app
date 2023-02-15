import axios from "axios";
import { ENDPOINTS } from "../../../constants/Endpoints";
import { User } from "alarm-core";
import { useAsyncCall } from "../../utils/use-async-call";
import { handleEmailSignIn } from "./use-email-sign-in";

export interface IEmailSignUpSchema {
	readonly email: string;
	readonly password: string;
}

export const useEmailSignUp = () => {
	return useAsyncCall(
		async (payload: IEmailSignUpSchema): Promise<User> => {
			const response = await axios.post(`${ENDPOINTS.auth}/auth__emailSignUp`, payload);

			const user: User = response.data;

			await handleEmailSignIn(payload);

			return user;
		},
		{
			initial: false,
		},
		[]
	);
};
