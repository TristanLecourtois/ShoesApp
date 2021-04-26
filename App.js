import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "/Users/lecourtoistristan/ShoesApp/Tabs.js";
import SignUp from "/Users/lecourtoistristan/ShoesApp/SignUp.js";
import { ItemContext } from "/Users/lecourtoistristan/ShoesApp/ItemContext.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ItemContext>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Tabs"}
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemContext>
  );
};

export default App;
