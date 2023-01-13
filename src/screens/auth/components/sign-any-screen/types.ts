export interface SignEmailPayload {
	email: string;
	password: string;
}

export interface SignInOrUpEmailProps {
	onSubmit(payload: SignEmailPayload): any;
	title: string;
	subtitle: string;
	button: string;
	loading: boolean;
}
