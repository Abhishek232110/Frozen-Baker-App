import { Box, NativeBaseProvider } from "native-base";
import HomeComponent from "./home";

export default function HeaderComponnet() {
  return (
    <>
      <NativeBaseProvider>
        <Box
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>FooterComponent</Box>
          <Box>FooterComponent</Box>
          <Box>FooterComponent</Box>
        </Box>
        <HomeComponent />
      </NativeBaseProvider>
    </>
  );
}
