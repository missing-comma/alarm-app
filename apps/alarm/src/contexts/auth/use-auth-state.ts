import { useObjectState } from "../../hooks/utils/use-object-state";

export const useAuthContextStates = () => {
	const loggedIn = useObjectState<boolean | null>(null);

	return {
		loggedIn,
	};
};
