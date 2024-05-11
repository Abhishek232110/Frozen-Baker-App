import NavigationScreen from "./src/api/route";
import { store } from "./src/api/store";
import { Provider } from "react-redux";
import { NativeWindStyleSheet } from "nativewind";

const App = () => {
  // const {
  //   requestUserPermission,
  //   getFCMToken,
  //   listenToBackgroundNotifications,
  //   listenToForegroundNotifications,
  //   onNotificationOpenedAppFromBackground,
  //   onNotificationOpenedAppFromQuit,
  // } = usePushNotification();
  // useEffect(() => {
  //   const listenToNotifications = () => {
  //     try {
  //       getFCMToken();
  //       requestUserPermission();
  //       onNotificationOpenedAppFromQuit();
  //       listenToBackgroundNotifications();
  //       listenToForegroundNotifications();
  //       onNotificationOpenedAppFromBackground();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   listenToNotifications();
  // }, []);

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
