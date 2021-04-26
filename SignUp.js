import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Heyy</Text>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
