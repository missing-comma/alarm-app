import { useEmailSignUp } from "../../../hooks/api/auth/use-email-sign-up";
import { SignInOrAny } from "../components/sign-any-screen";

export const SignUpScreen: React.FC = props => {
	const signup = useEmailSignUp();

	return (
		<SignInOrAny
			title="Congratulations!"
			subtitle="You have taken the first step to never forget something again!"
			button="Create"
			loading={signup.running}
			onSubmit={signup}
		/>
	);
};
