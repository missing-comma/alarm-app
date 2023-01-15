import { LogBox } from "react-native";
import "./src/config";
import App from "./src";
import { withAuthContextProvider } from "./src/contexts/auth";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

export default withAuthContextProvider(App);
