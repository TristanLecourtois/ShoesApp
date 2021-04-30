import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "../ShoesApp/Tabs";
import SignUp from "../ShoesApp/SignUp";
import Login from "../ShoesApp/Login"
import { ItemContext } from "../ShoesApp/ItemContext";
import NewAccount from "../ShoesApp/NewAccount"
import NewAccount2 from "./NewAccount2.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ItemContext>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"SignUp"}
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NewAccount" component={NewAccount} />
          <Stack.Screen name="NewAccount2" component={NewAccount2} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemContext>
  );
};

export default App;
