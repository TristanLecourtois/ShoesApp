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

const NewAccount = ({ navigation }) => {
  const [onFocus, setonFocus] = useState(false);
    const [onFocus2, setonFocus2] = useState(false);
    const [name,setName] = useState("");

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
              navigation.navigate("Login");
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
              1
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
        <View
          style={{
            flexDirection: "row",
            marginLeft: 40,
            marginTop: 50,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 115,
              width: 115,
              borderWidth: 6,
              borderRadius: 90,
              borderColor: "white",
              shadowColor: "rgb(33,35,45)",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 3.94,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 50, height: 50, tintColor: "rgb(188,189,193)" }}
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/internet-security-solid/32/Internet_Security_hyper_link_web_chain_connect-2-512.png",
              }}
            />
          </TouchableOpacity>
          <Text
            style={{ color: "rgb(188,189,193)", fontSize: 15, marginLeft: 20 }}
          >
            Upload a profile picture {"\n"}(optional)
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 40 }}>
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
              style={{ fontWeight: "bold", color: "white", letterSpacing: 1.1 }}
            >
              NAME
            </Text>
            <TextInput
              onFocus={() => {
                setonFocus(true);
              }}
              onBlur={() => {
                setonFocus(false);
              }}
              onChangeText={(text) => setName(text)}
              color="rgb(255,174,0)"
              placeholder="Enter your name"
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
              style={{ fontWeight: "bold", color: "white", letterSpacing: 1.1 }}
            >
              USER
            </Text>
            <TextInput
              onFocus={() => {
                setonFocus2(true);
              }}
              onBlur={() => {
                setonFocus2(false);
              }}
              color="rgb(255,174,0)"
              placeholder="Enter your username"
              placeholderTextColor="rgb(105,107,118)"
              style={{ fontSize: 18, width: 250, marginTop: 10 }}
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
                      onPress={() => navigation.navigate("NewAccount2", {userName:name})}
          >
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
              Next
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

export default NewAccount;
