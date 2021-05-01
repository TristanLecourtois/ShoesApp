import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { firebase } from "../ShoesApp/firebase/config";

const Login = ({ navigation }) => {
  const [onFocus, setonFocus] = useState(false);
  const [onFocus2, setonFocus2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Tabs"))
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Invalid email");
          case "auth/invalid-credential":
            alert("Invalid credentials");
          case "auth/user-not-found":
            alert("User not found");
        }
      });
  };

  return (
    <ScrollView style={{ backgroundColor: "rgb(69,73,89)" }}>
      <View
        style={{
          height: Dimensions.get("window").height,
          flex: 1,
        }}
      >
        <View style={{ width: 390, height: 100, marginTop: 50 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Image
              source={{
                uri:
                  "https://www.materialui.co/materialIcons/navigation/arrow_back_grey_192x192.png",
              }}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: "white",
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 45,
              marginLeft: 50,
            }}
          >
            Log In
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 290,
              height: 60,
              flexDirection: "row",
              borderBottomColor: onFocus
                ? "rgb(255,174,0)"
                : "rgb(105,107,118)",
              marginTop: 110,
              borderBottomWidth: 1,
            }}
          >
            <Image
              source={{
                uri:
                  "https://cdn1.iconfinder.com/data/icons/user-interface-1-outline/32/ui_avatar_profil_user_person-512.png",
              }}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: "rgb(177,179,185)",
                marginTop: 18,
              }}
            />
            <TextInput
              color="white"
              placeholder="Email"
              autoCapitalize="none"
              onFocus={() => {
                setonFocus(true);
              }}
              onBlur={() => {
                setonFocus(false);
              }}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholderTextColor="rgb(105,107,118)"
              style={{ fontSize: 18, marginLeft: 10, width: 250 }}
            />
          </View>
          <View
            style={{
              width: 290,
              height: 60,
              flexDirection: "row",
              borderBottomColor: onFocus2
                ? "rgb(255,174,0)"
                : "rgb(105,107,118)",
              marginTop: 35,
              borderBottomWidth: 1,
            }}
          >
            <Image
              source={{
                uri:
                  "https://icon-library.com/images/password-icon-png/password-icon-png-2.jpg",
              }}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: "rgb(177,179,185)",
                marginTop: 18,
              }}
            />
            <TextInput
              color="white"
              autoCapitalize="none"
              secureTextEntry
              onFocus={() => {
                setonFocus2(true);
              }}
              onBlur={() => {
                setonFocus2(false);
              }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              placeholderTextColor="rgb(105,107,118)"
              style={{ fontSize: 18, marginLeft: 10, width: 250 }}
            />
          </View>
          <Text></Text>
          <TouchableOpacity
            style={{
              width: 285,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(33,35,45)",
              height: 80,
              borderRadius: 40,
              marginTop: 70,
              shadowColor: "rgb(33,35,45)",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 3.94,
              elevation: 5,
            }}
            onPress={() => onLoginPress()}
          >
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
              Log in
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 25 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              First time here?
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate("NewAccount")}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "rgb(157,194,208)",
                }}
              >
                Sign up.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
