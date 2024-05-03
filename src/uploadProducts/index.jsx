import RenderButton from "../common/Button";
import cake from "../../assets/cake1.jpg";
import pastry from "../../assets/pastry.jpg";
import chocolate from "../../assets/chocolate.jpg";
import icecream from "../../assets/ice.jpg";
import { ScrollView, Text, View } from "react-native";

const UploadProduct = ({ navigation }) => {
  const UploadProductButton = ({
    image,
    renderscreen,
    rendercomponentname,
  }) => {
    return (
      <>
        <View px={6} py={4} space={2}>
          <Image source={image} alt="productuploadimg" height={"24"} />
          <RenderButton
            rendercomponentname={rendercomponentname}
            renderscreen={renderscreen}
            navigation={navigation}
            bgColor="border bg-indigo-600"
            textColor="text-white"
          />
        </View>
      </>
    );
  };
  return (
    <ScrollView>
      <View px={6}>
        <Text className="text-3xl text-center py-4 font-medium">
          Upload Your Product
        </Text>
      </View>
      <UploadProductButton
        image={cake}
        rendercomponentname="Upload Cake"
        renderscreen="Upload Cake"
      />
      <UploadProductButton
        image={pastry}
        rendercomponentname="Upload Pastry"
        renderscreen="Upload Pastry"
      />
      <UploadProductButton
        image={chocolate}
        rendercomponentname="Upload Chocolate"
        renderscreen="Upload Chocolate"
      />
      <UploadProductButton
        image={icecream}
        rendercomponentname="Upload Icecream"
        renderscreen="Upload Icecream"
      />
    </ScrollView>
  );
};

export default UploadProduct;
