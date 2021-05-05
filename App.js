import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./src/screens/Tabs";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login"
import { ItemContext } from "./src/data/ItemContext";
import NewAccount from "./src/screens/NewAccount"
import NewAccount2 from "./src/screens/NewAccount2";

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
