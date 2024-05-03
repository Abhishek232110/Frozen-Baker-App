// import {
//   Box,
//   Button,
//   Center,
//   FormControl,
//   HStack,
//   Input,
//   Image,
//   ScrollView,
//   VStack,
// } from "native-base";

// import icecream from "../../../assets/ice.jpg";

// import { useRef, useState } from "react";

// const UploadIcecream = ({ navigation }) => {
//   const [upload, setUpload] = useState();
//   const myRef = useRef({});
//   const ReUseForm = ({ type, type1, title, title1 }) => {
//     return (
//       <>
//         <HStack justifyContent="space-between">
//           {type && title ? (
//             <VStack>
//               <FormControl.Label>{title}</FormControl.Label>
//               <Input type={type} width="32" />
//             </VStack>
//           ) : null}
//           {title1 && type1 ? (
//             <VStack>
//               <FormControl.Label>{title1}</FormControl.Label>
//               <Input type={type1} width={32} />
//             </VStack>
//           ) : null}
//         </HStack>
//       </>
//     );
//   };
//   return (
//     <Center w="100%">
//       <ScrollView>
//         <Image source={icecream} alt="loginImage" height={"56"} />
//         <Box safeArea width="screen" px="10" height="full">
//           <FormControl>
//             <VStack space={6}>
//               <ReUseForm
//                 title="Flavour"
//                 type="text"
//                 title1="Price"
//                 type1="number"
//               />
//               <ReUseForm
//                 title="Weight"
//                 type="text"
//                 title1="Choose image"
//                 type1="file"
//               />
//               <HStack
//                 flexDirection="row"
//                 justifyItems="center"
//                 alignItems="center"
//               >
//                 <Button className="w-full bg-indigo-600 h-12">
//                   Save Details
//                 </Button>
//               </HStack>
//             </VStack>
//           </FormControl>
//         </Box>
//       </ScrollView>
//     </Center>
//   );
// };

// export default UploadIcecream;
