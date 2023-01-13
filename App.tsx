import "./src/config";
import App from "./src";
import { withAuthContextProvider } from "./src/contexts/auth";

export default withAuthContextProvider(App);
