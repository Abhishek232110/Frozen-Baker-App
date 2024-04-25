import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";

const RegisterUser = () => {
  return (
    <Center w="100%">
      <Box safeArea p="0" py="8" w="90%" maxW="290" marginTop="10">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Register Here
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        ></Heading>

        <VStack space={5}>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input type="emails" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Create Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
                marginTop: "3",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="1" colorScheme="indigo">
            Register
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default RegisterUser;
