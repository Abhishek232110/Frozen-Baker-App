import { Box, HStack, NativeBaseProvider } from "native-base";

export default function HomeComponent() {
  return (
    <>
      <NativeBaseProvider>
        <HStack>
          <Box>HomeComponent</Box>
          <Box>HomeComponent</Box>
        </HStack>
      </NativeBaseProvider>
    </>
  );
}
