import { useCallback, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { makeLazyContext } from "../../helpers/make-lazy-context";
import { useAuthContextStates } from "./use-auth-state";

const LazyContext = makeLazyContext(() => {
	const states = useAuthContextStates();

	useEffect(() => {
		const firebaseAuth = getAuth();
		onAuthStateChanged(firebaseAuth, next => {
			states.loggedIn.set(Boolean(next));
		});
	}, []);

	const signIn = useCallback(() => states.loggedIn.set(true), []);
	const signOut = useCallback(() => states.loggedIn.set(false), []);

	return {
		isLoggedIn: states.loggedIn.value,
		signIn,
		signOut,
	};
});

export const {
	useContext: useAuthContext,
	Provider: AuthContextProvider,
	withProvider: withAuthContextProvider,
} = LazyContext;
