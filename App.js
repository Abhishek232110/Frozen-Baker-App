import NavigationScreen from "./src/api/route";
import { store } from "./src/api/store";
import { Provider } from "react-redux";
import { NativeWindStyleSheet } from "nativewind";
import HomeComponent from "./src/home/components/home";
const App = () => {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });
  return (
    <Provider store={store}>
      <NavigationScreen />
      {/* <HomeComponent /> */}
    </Provider>
  );
};

export default App;
