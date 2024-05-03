import { View, Text, ScrollView } from "react-native";
import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const PrivacyPolicy = () => {
  let value = "Abhi";
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("my-key", value);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");

      if (value) {
        console.log("valur", value);
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();
  storeData("z,dmdslkdlk");
  return (
    <ScrollView>
      <View paddingLeft={2} paddingRight={2} paddingTop={3} space={3}>
        {/* <Text className="leading-5">
          <Text className="text-lg font-medium text-red-400">Note :</Text> This
          Privacy Policy forms an integral part of the Terms of Use and other
          policies, disclaimers etc. available on the Website of FNP and shall
          be read in conjunction.
        </Text>

        <Text className="leading-5">
          <Text className="text-lg font-medium text-red-400">
            SCOPE OF THE PRIVACY POLICY :
          </Text>
          This Privacy Policy describes the information that FNP, as part of its
          normal operations, collects from you, stores, uses and protects. The
          purpose of this Privacy Policy is to outline and help you understand
          various guidelines and procedures that are consistently followed by
          FNP when collecting, storing, utilizing, disclosing or otherwise
          dealing with any Personal Information. By using the Website, you agree
          to be legally bound by this Privacy Policy, which shall take effect
          immediately on your first use of the Website. Further, the Website may
          contain hyperlinks to websites operated by parties other than FNP
          which are developed by people over whom FNP exercises no control as
          well as the Website may contain social media plug-ins. This Privacy
          Policy does not apply to the practices of such third-party websites or
          social media websites. Such other third-party/social media websites
          may place their own cookies on your computer/electronic device,
          collect data or solicit Personal Information. FNP is accordingly not
          responsible for the privacy practices or the content of such websites.
        </Text>
        <Text className="leading-5">
          <Text className="text-lg font-medium text-red-400">
            COMMUNICATIONS FROM THE SITE :
          </Text>
          We may occasionally send you information on products, services,
          special deals, and promotions and our press release(s)/newsletter(s).
          We respect your privacy and you can contact us at support@fnp.com if
          you subsequently wish to be removed from this mailing list. Apart from
          above the Company may also send you service-related announcements on
          rare occasions when it is necessary to do so. For instance, if
          Company’s service is temporarily suspended for maintenance, the
          Company might send you an email intimating you the same.
        </Text>
        <Text className="leading-5">
          <Text className="text-lg font-medium text-red-400">
            SECURITY OF PERSONAL INFORMATION :
          </Text>
          Company takes all reasonable steps to comply with the applicable laws
          to ensure that the Personal Information provided by you is stored in a
          secure environment protected from unauthorized access, modification,
          destruction or disclosure. To protect Personal Information against
          accidental or unlawful destruction, loss or modification and against
          unauthorized disclosure or access, the Company has implemented robust
          security practices and standards to guard your information. We have a
          comprehensive and well documented information security programme and
          information security policy that contains managerial, technical,
          operational and physical security control measures that are
          commensurate with the information assets being protected considering
          the nature of our business operations. We take appropriate
          organisational and technical security measures to protect your data
          against unauthorised disclosure or processing. We use a secure server
          to store the information you give us when you use the Website or
          create an account on the Website and any Personal Information you
          provide us online is securely encrypted. We will use technical and
          organisational measures to safeguard your Personal Information and we
          ensure that your Personal Information is saved on secure servers.
        </Text> */}
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;
