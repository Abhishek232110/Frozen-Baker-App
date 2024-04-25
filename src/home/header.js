import { Box, NativeBaseProvider } from "native-base";

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
      </NativeBaseProvider>
    </>
  );
}
