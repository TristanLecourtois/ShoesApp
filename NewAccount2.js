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

const NewAccount2 = ({ navigation }) => {
  const [onFocus, setonFocus] = useState(false);
  const [onFocus2, setonFocus2] = useState(false);
  const [onFocus3, setonFocus3] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Alert, setAlert] = useState("");

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Tabs", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
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
              navigation.navigate("NewAccount");
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
              marginLeft: 40,
            }}
          >
            New
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 45,
              marginLeft: 40,
            }}
          >
            Account
          </Text>
        </View>
        <View style={{ marginLeft: 300, marginTop: -75 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 35 }}>
              2
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: 8,
                marginTop: 9,
              }}
            >
              /
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
                marginTop: 12,
                marginLeft: 10,
              }}
            >
              2
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              marginLeft: 3,
              marginTop: 5,
            }}
          >
            STEPS
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 80 }}>
          <View
            style={{
              width: 290,
              height: 60,
              borderBottomWidth: 1,
              borderBottomColor: onFocus
                ? "rgb(255,174,0)"
                : "rgb(105,107,118)",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                letterSpacing: 1.1,
              }}
            >
              EMAIL
            </Text>
            <TextInput
              onFocus={() => {
                setonFocus(true);
              }}
              onBlur={() => {
                setonFocus(false);
              }}
              color="rgb(255,174,0)"
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              placeholder="Enter your email"
              placeholderTextColor="rgb(105,107,118)"
              style={{ fontSize: 18, width: 250, marginTop: 10 }}
            />
          </View>
          <View
            style={{
              width: 290,
              height: 60,
              borderBottomWidth: 1,
              borderBottomColor: onFocus2
                ? "rgb(255,174,0)"
                : "rgb(105,107,118)",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                letterSpacing: 1.1,
              }}
            >
              PASSWORD
            </Text>
            <TextInput
              onFocus={() => {
                setonFocus2(true);
              }}
              onBlur={() => {
                setonFocus2(false);
              }}
              color="rgb(255,174,0)"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Enter your password"
              placeholderTextColor="rgb(105,107,118)"
              style={{ fontSize: 18, width: 250, marginTop: 10 }}
            />
          </View>
          <View
            style={{
              width: 290,
              height: 60,
              borderBottomWidth: 1,
              borderBottomColor: onFocus3
                ? "rgb(255,174,0)"
                : "rgb(105,107,118)",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                letterSpacing: 1.1,
              }}
            >
              PASSWORD
            </Text>
            <TextInput
              onFocus={() => {
                setonFocus3(true);
              }}
              onBlur={() => {
                setonFocus3(false);
              }}
              color="rgb(255,174,0)"
              placeholder="Confirm your password"
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
              value={confirmPassword}
              placeholderTextColor="rgb(105,107,118)"
              style={{ fontSize: 18, width: 250, marginTop: 10 }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: "rgb(204,85,110)",
              marginTop: 20,
            }}
          >
            {Alert}
          </Text>
          <TouchableOpacity
            style={{
              width: 305,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(33,35,45)",
              height: 80,
              borderRadius: 40,
              marginTop: 60,
              shadowColor: "rgb(33,35,45)",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 3.94,
              elevation: 5,
            }}
            onPress={() => onRegisterPress()}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>
              Create account
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 25 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Not the first time here?
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "rgb(157,194,208)",
                }}
              >
                Log in.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewAccount2;
