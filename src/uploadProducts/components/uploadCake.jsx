import cake from "../../../assets/cake1.jpg";

import { useRef, useState } from "react";
import { Button, ScrollView, View } from "react-native";

const UploadCake = ({ navigation }) => {
  const [upload, setUpload] = useState();
  const myRef = useRef({});
  const ReUseForm = ({ type, type1, title, title1 }) => {
    return (
      <>
        <View justifyContent="space-between">
          {type && title ? (
            <View>
              <FormControl.Label>{title}</FormControl.Label>
              <Input type={type} width="32" />
            </View>
          ) : null}
          {title1 && type1 ? (
            <View>
              <FormControl.Label>{title1}</FormControl.Label>
              <Input type={type1} width={32} />
            </View>
          ) : null}
        </View>
      </>
    );
  };
  return (
    <View w="100%">
      <ScrollView>
        <Image source={cake} alt="loginImage" height={"56"} />
        <View safeArea width="screen" px="10" height="full">
          <FormControl>
            <View space={6}>
              <ReUseForm
                title="Flavour"
                type="text"
                title1="Price"
                type1="number"
              />
              <ReUseForm
                title="Weight"
                type="text"
                title1="Choose image"
                type1="file"
              />
              <View
                flexDirection="row"
                justifyItems="center"
                alignItems="center"
              >
                <Button className="w-full bg-indigo-600 h-12">
                  Save Details
                </Button>
              </View>
            </View>
          </FormControl>
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadCake;
