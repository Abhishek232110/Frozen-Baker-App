import NavigationScreen from "./src/api/route";
import { store } from "./src/api/store";
import { Provider } from "react-redux";
import { NativeWindStyleSheet } from "nativewind";
import PaymentComponent from "./src/account/components/payment";

const App = () => {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <Provider store={store}>
      <NavigationScreen />
      {/* <PaymentComponent /> */}
    </Provider>
  );
};

export default App;
