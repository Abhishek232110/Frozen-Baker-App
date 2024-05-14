import NavigationScreen from "./src/api/route";
import { store } from "./src/api/store";
import { Provider } from "react-redux";
import { NativeWindStyleSheet } from "nativewind";
import SplashScreen from "./src/splashScreen";

const App = () => {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
};

export default App;
