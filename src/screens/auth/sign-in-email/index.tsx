import { useEmailSignIn } from "../../../hooks/api/auth/use-email-sign-in";
import { SignInOrAny } from "../components/sign-any-screen";

export const SignInScreen: React.FC = props => {
	const signIn = useEmailSignIn();

	return (
		<SignInOrAny
			title="Let's sign you in"
			subtitle="Welcome Back. Nice to have you here"
			button="Log in"
			loading={signIn.running}
			onSubmit={signIn}
		/>
	);
};
