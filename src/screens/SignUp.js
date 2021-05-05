import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";

const SignUp = ({ navigation }) => {
  return (
    <View>
      <View style={{ width: 390, height: 200 }}>
        <Svg>
          <Circle
            cx="85"
            cy="110"
            r="25"
            fill="transparent"
            stroke="rgb(63,57,79)"
            strokeWidth="10"
          />
        </Svg>
      </View>
      <View
        style={{
          flexDirection: "column",
          width: 390,
          height: 450,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 45,
            fontWeight: "bold",
            marginLeft: 60,
            marginTop: 0,
            color: "rgb(63,57,79)",
          }}
        >
          Start
        </Text>
        <Text
          style={{
            fontSize: 45,
            fontWeight: "bold",
            marginLeft: 60,
            marginTop: 0,
            color: "rgb(63,57,79)",
          }}
        >
          your
        </Text>
        <Text
          style={{
            fontSize: 45,
            fontWeight: "bold",
            marginLeft: 60,
            marginTop: 0,
            color: "rgb(63,57,79)",
          }}
        >
          adventure
        </Text>
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(255,174,0)",
              width: 290,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              shadowColor: "rgb(255,174,0)",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 35, marginLeft: 55 }}>
          <Text>You dont have an account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("NewAccount")}
          >
            <Text style={{ fontWeight: "bold" }}>Sign up there</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
