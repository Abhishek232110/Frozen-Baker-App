import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
import cake from "../../../assets/homecake/cake.webp";
import ann from "../../../assets/homecake/ann.jpg";
import birthday from "../../../assets/homecake/birthday.jpg";
import mother from "../../../assets/homecake/mother1.webp";
import NavigationList from "../../products/navigationList";
const dataSource = [
  {
    img:
      "https://st.depositphotos.com/1037987/5069/i/450/depositphotos_50695799-stock-photo-multi-generation-family-celebrating-birthday.jpg",
  },
  {
    img:
      "https://img.freepik.com/premium-photo/mothers-day-celebration-featuring-colorful-table-adorned-with-food-perfect-families-gather_1212632-49.jpg",
  },

  {
    img:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zX3Bob3RvX29mX2luZGlhbl9taWRkbGVfYWdlX3BhcmVudHNfYW5kX2NoaWxkcl9hYWNiZjQ5MS04YTQ0LTQyYWYtODc3Yi00ZjZmMTQ0NTRlMDgucG5n.png",
  },
  {
    img:
      "https://i.pinimg.com/564x/80/ba/bc/80babc896fa05058561b97c14af603a0.jpg",
  },
  {
    img:
      "https://whitworths-sugar.co.uk/cdn/shop/collections/Fake_Cake_celebration_460x@2x.jpg?v=1684941220",
  },
];

const DetailButton = ({ title, image }) => {
  return (
    <>
      <TouchableOpacity className="flex-col mx-auto items-center px-6 bg-[#F4EDE7] space-y-1 rounded-md my-1 py-2 ">
        <Image
          source={image}
          style={{
            width: 130,
            height: 110,
            borderRadius: 5,
          }}
        />
        <Text>{title}</Text>
      </TouchableOpacity>
    </>
  );
};
const HomeComponent = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View className="space-y-1 px-3">
          <View style={{ flexDirection: "row" }}>
            <DetailButton image={cake} title="Cake" />
            <DetailButton image={ann} title="Annivarsary" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <DetailButton image={birthday} title="Birthday Cake" />
            <DetailButton image={mother} title="Mother's Day" />
          </View>
          <View
            style={{
              paddingHorizontal: 4,
            }}
          >
            <ImageSlider
              data={dataSource}
              caroselImageStyle={{ resizeMode: "stretch" }}
              autoPlay={true}
              closeIconColor="#fff"
              onClick={() => navigation.navigate("Account")}
            />
          </View>
          <View>
            <NavigationList navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeComponent;
