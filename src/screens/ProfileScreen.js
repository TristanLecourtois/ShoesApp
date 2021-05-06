import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { firebase } from "../firebase/config";

const ProfileScreen = ({navigation}) => {
  let Newuser = firebase.auth().currentUser;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "rgb(69, 73, 89)",
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginTop: 50,
            height: 450,
          }}
        >
          <View
            style={{
              height: 110,
              width: 110,
              borderRadius: 50,
              zIndex: 2,
              shadowColor: "rgb(33,35,45)",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.3,
              shadowRadius: 3.84,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri:
                  Newuser.photoURL === null
                    ? "https://www.villascitemirabel.com/wp-content/uploads/2016/07/default-profile.png"
                    : Newuser.photoURL,
              }}
              resizeMode="cover"
              style={{
                width: 110,
                height: 110,
                borderRadius: 80,
                borderWidth: 3,
                borderColor: "white",
              }}
            />
          </View>
          <View
            style={{
              width: Dimensions.get("window").width,
              height: 300,
              backgroundColor: "white",
              borderTopRightRadius: 45,
              borderTopLeftRadius: 45,
              marginTop: -50,
              zIndex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                marginTop: 70,
                letterSpacing: 1.5,
              }}
            >
              {Newuser.displayName}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                letterSpacing: 1.2,
                marginTop: 5,
              }}
            >
              @{Newuser.phoneNumber}userName10
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
